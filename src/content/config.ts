import { z, defineCollection } from "astro:content";

const jobs = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string(),
    title: z.string(),
    company: z.string(),
    location: z.string(),
    range: z.string(),
    url: z.string(),
    tech: z.array(z.string())
  })
})

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string(),
    title: z.string(),
    github: z.string(),
    cover: z.string(),
    external: z.string(),
    tech: z.array(z.string()),
    showInProjects: z.boolean()
  })
})

export const collections = { jobs, projects }