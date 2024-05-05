import path from 'path'

export default {
  introspection: {
    type: 'sdl',
    paths: ['./src/schema.gql'],
  },
  website: {
    staticAssets: path.join(__dirname, 'assets'),
    template: 'carbon-multi-page',
  },
}
