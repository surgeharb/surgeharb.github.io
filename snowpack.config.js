// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  plugins: [
    /* ... */
  ],
  config: {
    optimize: {
      treeshake: true,
    },
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    metaUrlPath: 'meta_snowpack',
  },
  alias: {
    react: 'preact/compat',
    'react-dom': 'preact/compat',
  },
};
