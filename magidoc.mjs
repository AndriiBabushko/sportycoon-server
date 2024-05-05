import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
