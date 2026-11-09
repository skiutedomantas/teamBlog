import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/blog',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(''),    
    tag: z.enum([
      'development',
      'design',
      'user experience',
    ]),
  }),
});

export const collections = { blog };