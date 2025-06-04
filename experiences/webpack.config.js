const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = {
  output: {
    publicPath: 'http://localhost:4200/',
    uniqueName: 'experiences',
    scriptType: 'text/javascript'
  },
  optimization: {
    runtimeChunk: false
  },
  experiments: {
    outputModule: true
  }
};
