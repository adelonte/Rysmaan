import { createClient } from '@supabase/supabase-js'

function isDuplicateEmailError(error: { code?: string; message?: string } | null) {
  if (!error) return false
  if (error.code === '23505') return true
  const msg = (error.message || '').toLowerCase()
  return msg.includes('duplicate') || msg.includes('unique')
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const url = config.supabaseUrl as string
  const key = config.supabaseAnonKey as string

  if (!url || !key) {
    throw createError({
      statusCode: 503,
      statusMessage: 'Sign-up is not configured'
    })
  }

  const body = await readBody(event)
  const name = typeof body?.name === 'string' ? body.name.trim() : ''
  const company = typeof body?.company === 'string' ? body.company.trim() : ''
  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''

  if (!name || !company || !email) {
    throw createError({ statusCode: 400, statusMessage: 'Missing required fields' })
  }

  const supabase = createClient(url, key)
  const { error } = await supabase.from('early_access_requests').insert({
    name,
    company,
    email
  })

  if (error) {
    if (isDuplicateEmailError(error)) {
      throw createError({ statusCode: 409, statusMessage: 'Duplicate email' })
    }
    throw createError({ statusCode: 500, statusMessage: 'Insert failed' })
  }

  return { ok: true }
})
