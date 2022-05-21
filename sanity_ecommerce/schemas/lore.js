export default {
  name: 'lore',
  title: 'Lore',
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
          name: 'title',
          title: 'Title',
          type: 'string',
      },
      {
          name: 'description',
          title: 'Description',
          type: 'string',
      },
      {
          name: 'btnText',
          title: 'Button-text',
          type: 'string'
      }
  ]
}