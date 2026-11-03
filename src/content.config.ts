import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each collection is a folder of simple text files in src/content/.
// Add a new story, business, product or newsletter issue by adding one file.

const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['News', 'Stories', 'Community', 'Outdoors', 'Culture', 'Food', 'Neighborhoods']),
    date: z.coerce.date(),
    summary: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    author: z.string().default('MyKailua'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const businesses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/businesses' }),
  schema: z.object({
    name: z.string(),
    category: z.string(),
    summary: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    address: z.string().optional(),
    website: z.string().optional(),
    instagram: z.string().optional(),
    partner: z.boolean().default(true),
    draft: z.boolean().default(false),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    maker: z.string(),
    price: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    shopifyUrl: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const weekly = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/weekly' }),
  schema: z.object({
    title: z.string(),
    issue: z.number(),
    date: z.coerce.date(),
    summary: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    // The web version of the issue (windward-weekly repo, hosted on Netlify).
    webUrl: z.string().optional(),
    // The email version of the issue on beehiiv.
    beehiivUrl: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { stories, businesses, products, weekly };
