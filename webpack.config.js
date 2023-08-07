// DEV Webpack configuration used to build the service worker

const path = require("path");

const webBuildTargetFolder = path.join(__dirname,"dist","angular-workbox");
const targetServiceWorkerFilename = "service-worker.js";

// webpack needs to be explicitly required
const webpack = require('webpack')
// import webpack from 'webpack' // (if you're using ESM)


module.exports = {
  target: "node",
  mode: "none",
  // WARNING: commented out to disable source maps
  //devtool: 'inline-source-map',
  entry: {
    index: path.join(__dirname, "src", "service-worker.ts"),
  },
  resolve: { extensions: [".js", ".ts"] },
  output: {
    path: webBuildTargetFolder,
    filename: targetServiceWorkerFilename,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          onlyCompileBundledFiles: true,
        },
      },
    ],
  },
 plugins: [
    // fix "process is not defined" error:
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ]
};