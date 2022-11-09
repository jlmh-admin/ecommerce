import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const Client = sanityClient({
    projectId: 'wpjicp00',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN_CLIENT2
});

const builder = imageUrlBuilder(Client);

export const urlFor = (source) => builder.image(source);