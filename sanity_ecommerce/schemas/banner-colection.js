export default {
  name: 'bannerColection',
  title: 'Banner-Colection',
  type: 'document',
  fields: [
      {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
              hotspot: true,
          },
      },
      {
          name: 'buttonText',
          title: 'ButtonText',
          type: 'string',
      },
  ],
};