/*
import code from './docs/code.mdx';
import usage from './docs/usage.md';
*/

module.exports = {
  title: 'Blockquotes',
  section: 'Components',
  status: 'ready',
  tabs: [
    {
      name: 'Usage',
      // component: usage,
      // loadableComponent: () =>
      //   import(/* webpackChunkName: "ec-blockquote-usage", webpackPrefetch: true */ './docs/usage.md'),
      url: 'usage',
    },
    {
      name: 'Showcase',
      // component: code,
      // loadableComponent: () =>
      //   import(/* webpackChunkName: "ec-blockquote-code", webpackPrefetch: true */ './docs/code.mdx'),
      url: 'showcase',
    },
  ],
  defaultTab: 'usage',
};
