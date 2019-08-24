const {patchStorybookWebpackConfig} = require('react-zeroconfig');

module.exports = async ({config}) => {
  patchStorybookWebpackConfig({config});
  
  config.module.rules.push({
    test: /\.stories\.(js|jsx)$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });
  
  return config;
};