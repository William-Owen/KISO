import { configure, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
  options: {
    name: 'JM UI Library',
    isFullscreen: false,
    showPanel: true,
    // more configuration here
  },
});

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'someDefault',
  },
});

configure(require.context('../src', true, /\.stories\.js$/), module)