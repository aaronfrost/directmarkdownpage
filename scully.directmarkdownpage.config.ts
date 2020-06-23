import { registerPlugin, scullyConfig, ScullyConfig } from '@scullyio/scully';
import { join } from 'path';

const tadaaPlugin = registerPlugin('router', 'tadaa', async (route, config) => {
  console.log(join(scullyConfig.homeFolder, config.file));
  return [
    {
      route,
      templateFile: join(scullyConfig.homeFolder, config.file),
    },
  ];
});

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'directmarkdownpage',
  outDir: './dist/static',
  routes: {
    '/bar': {
      type: 'tadaa',
      file: './content/bar.md',
      postRenderers: ['contentRenderer'],
    },
  },
};
