import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'mdbeuykt',
  dataset: 'production',
  apiVersion: '2022-10-27', // use a UTC date string
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = source => {
  return builder.image(source);
};
