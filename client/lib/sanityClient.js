import sanityClient from '@sanity/client';

export const client = sanityClient({
   projectId: process.env.SANITY_PROJECT_ID,
   dataset: process.env.SANITY_DATASET,
   apiVersion: 'v1',
   useCdn: false,
   token: process.env.SANITY_TOKEN,
});
