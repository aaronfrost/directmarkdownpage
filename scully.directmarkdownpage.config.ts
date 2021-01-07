import { registerPlugin, scullyConfig, ScullyConfig } from '@scullyio/scully';
import { join } from 'path';

const staticFile = registerPlugin('router', 'staticFile', async (route, config) => {
  console.log(join(scullyConfig.homeFolder, config.file));
  return [
    {
      route,
      templateFile: join(scullyConfig.homeFolder, config.file),
      postRenderers: ['contentFolder'],
    },
  ];
});

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'directmarkdownpage',
  outDir: './dist/static',
  routes: {
    '/bar': {
      type: 'staticFile',
      file: './content/bar.md',
    },
    '': {
      type: 'staticFile',
      file: './content/bar.md',
    },
  },
};
