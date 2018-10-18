import code from './docs/code.mdx';
import usage from './docs/usage.md';

export default {
  title: 'Logo',
  section: 'Components',
  status: 'ready',
  tabs: [
    {
      name: 'Usage',
      component: usage,
      url: 'usage',
    },
    {
      name: 'Showcase',
      component: code,
      url: 'showcase',
    },
  ],
  defaultTab: 'usage',
};