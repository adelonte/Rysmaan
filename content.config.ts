import { defineCollection, z } from '@nuxt/content'

const createEnum = (options: [string, ...string[]]) => z.enum(options)

const createLinkSchema = () => z.object({
  label: z.string().nonempty(),
  to: z.string().nonempty(),
  icon: z.string().optional().editor({ input: 'icon' }),
  trailingIcon: z.string().optional().editor({ input: 'icon' }),
  size: createEnum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  trailing: z.boolean().optional(),
  target: createEnum(['_blank', '_self']).optional(),
  color: createEnum(['primary', 'secondary', 'neutral', 'error', 'warning', 'success', 'info']).optional(),
  variant: createEnum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional()
})

const createShotSchema = () => z.object({
  src: z.string().nonempty(),
  alt: z.string().nonempty(),
  label: z.string().optional(),
  width: z.number(),
  height: z.number(),
  crop: z.boolean().optional()
})

const createFeaturesSchema = () => z.object({
  headline: z.string().optional(),
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  items: z.array(z.object({
    icon: z.string().editor({ input: 'icon' }),
    title: z.string().nonempty(),
    description: z.string().nonempty(),
    to: z.string().optional()
  }))
})

export const collections = {
  content: defineCollection({
    source: 'index.yml',
    type: 'page',
    schema: z.object({
      hero: z.object({
        headline: z.string().optional(),
        links: z.array(createLinkSchema()),
        shot: createShotSchema()
      }),
      industries: z.object({
        title: z.string().nonempty(),
        items: z.array(z.string())
      }),
      services: createFeaturesSchema(),
      product: z.object({
        headline: z.string().optional(),
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        shots: z.array(createShotSchema())
      }),
      metrics: z.object({
        headline: z.string().optional(),
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        items: z.array(z.object({
          value: z.string().nonempty(),
          label: z.string().nonempty(),
          class: z.string().nonempty()
        }))
      }),
      cta: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        contact: z.string().nonempty(),
        links: z.array(createLinkSchema())
      })
    })
  }),
  solutions: defineCollection({
    source: 'solutions/*.yml',
    type: 'page',
    schema: z.object({
      // Drives the order of the Solutions dropdown, which is generated from
      // this collection so the nav cannot drift from the pages that exist.
      order: z.number(),
      navLabel: z.string().nonempty(),
      tagline: z.string().nonempty(),
      icon: z.string().editor({ input: 'icon' }),
      hero: z.object({
        headline: z.string().nonempty(),
        links: z.array(createLinkSchema())
      }),
      // Only some solution pages have a screenshot worth showing.
      screenshot: createShotSchema().optional(),
      features: createFeaturesSchema(),
      cta: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        contact: z.string().nonempty(),
        links: z.array(createLinkSchema())
      })
    })
  })
}
