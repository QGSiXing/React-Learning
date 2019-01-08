const path = require('path')
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  // config = injectBabelPlugin(
  //   ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
  //   config,
  // );
  // config = rewireLess.withLoaderOptions({
  //   modifyVars: { "@primary-color": "#1DA57A" },
  //   javascriptEnabled: true,
  // })(config, env);
  var tmp = config.resolve
  tmp.extensions = ['.web.js', '.js', '.json', '.web.jsx', '.jsx', '.less']
  tmp.alias = {
    '@': path.resolve(__dirname, './src'),
  }
  config.resolve = tmp
  console.log(config)
  return config
}