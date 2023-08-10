const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");

const { merge } = require("webpack-merge");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { IgnorePlugin } = require("webpack");
const config = require("./webpack.config.js");

module.exports = (env) =>
  merge(config(env), {
    mode: "production",
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    output: {
      chunkFilename: "[name].[contenthash].bundle.js",
      filename: "[name].[contenthash].bundle.js",
      publicPath: "/",
    },
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.css$/,
            chunks: "all",
            enforce: true,
          },
          reactVendor: {
            test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
            name: "vendor-react",
            chunks: "all",
          },
          draft: {
            test: /[\\/]node_modules[\\/](react-draft-wysiwyg|draft-js)[\\/]/,
            name: "draft-react",
            chunks: "all",
          },
          swagger: {
            test: /[\\/]node_modules[\\/](swagger-ui-react)[\\/]/,
            name: "swagger-react",
            chunks: "all",
          },
          redux: {
            test: /[\\/]node_modules[\\/](@reduxjs)[\\/]/,
            name: "redux",
            chunks: "all",
          },
          reactPdf: {
            test: /[\\/]node_modules[\\/](@react-pdf)[\\/]/,
            name: "reactPdf",
            chunks: "all",
          },
        },
      },
      minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    },
    plugins: [
      new CompressionPlugin({
        filename: "[path][base].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
      new IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      }),
      new MiniCssExtractPlugin(),
      // new BundleAnalyzerPlugin(), // Uncomment to check bundle size
    ],
  });
