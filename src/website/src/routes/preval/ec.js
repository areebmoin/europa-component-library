// @preval
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const glob = require('glob');

const files = glob.sync(
  // path.resolve(__dirname, '../../../../systems/ec/specs/**/config.js')
  path.resolve(
    __dirname,
    '../../../../systems/ec/specs/components/blockquote/config.js'
  )
);

// eslint-disable-next-line global-require, import/no-dynamic-require
const results = files.map(file => require(file));

module.exports = results;
