import path from 'path'

export default {
  introspection: {
    type: 'sdl',
    paths: ['./src/schema.gql'],
  },
  website: {
    staticAssets: path.join(__dirname, 'assets'),
    options: {
      // You need to specify the base path of your github pages root
      // Example: `/magidoc`
      siteRoot: '/<repo>',
    },
    template: 'carbon-multi-page',
  },
}
