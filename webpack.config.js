const path = require('path');

var config = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
};

var appConfig = Object.assign({}, config, {
  name: "api",
  entry: './src/snap_estimate_entrypoint.js',
  output: {
    filename: 'api.js',
    path: path.resolve(__dirname, 'docs'),
    library: 'SnapAPI',
  },
});
var formConfig = Object.assign({}, config,{
  name: "form",
  entry: './docs/form-controls.js',
  output: {
    filename: 'form-controls.bundle.js',
    path: path.resolve(__dirname, 'docs/shared/js'),
  },
});

module.exports = [
  appConfig, formConfig,       
];