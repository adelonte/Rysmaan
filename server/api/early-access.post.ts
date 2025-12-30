import fs from 'node:fs'
import path from 'node:path'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, company, location, role, interestType, phone } = body

  const dataDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir)
  }

  const filePath = path.join(dataDir, 'interested_users.txt')
  const timestamp = new Date().toISOString()
  const entry = `[${timestamp}] Name: ${name}, Email: ${email}, Company: ${company}, Location: ${location}, Role: ${role || 'N/A'}, Interest: ${interestType || 'N/A'}, Phone: ${phone || 'N/A'}\n`

  fs.appendFileSync(filePath, entry)

  return { success: true }
})