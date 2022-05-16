import sanityClient from '@sanity/client';

export const client = sanityClient({
   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
   apiVersion: 'v1',
   useCdn: false,
   token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
