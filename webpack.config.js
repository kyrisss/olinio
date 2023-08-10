const fs = require("fs");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { DefinePlugin } = require("webpack");
const dotenv = require("dotenv");

module.exports = (env) => {
  // Get the right environment file
  const currentPath = path.join(__dirname);
  const basePath = `${currentPath}/.env`;
  const envPath = `${basePath}.${env.goal}`;
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  // Parse it and get all its keys
  const fileEnv = dotenv.config({ path: finalPath }).parsed;
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return {
    entry: "./src/index.tsx",
    module: {
      rules: [
        {
          test: /\.(tsx|ts)?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.s(a|c)ss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(ico|png|jpe?g|gif|svg|mp3)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "fonts/",
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".mjs", ".js"],
      alias: {
        "@mock": path.resolve(__dirname, "mock/"),
        "@tools": path.resolve(__dirname, "src/tools/"),
        "@common": path.resolve(__dirname, "src/common/"),
        "@components": path.resolve(__dirname, "src/components/"),
        "@hooks": path.resolve(__dirname, "src/hooks/"),
        "@redux": path.resolve(__dirname, "src/redux/"),
        "@routes": path.resolve(__dirname, "src/routes/"),
        "@store": path.resolve(__dirname, "src/store/"),
        "@views": path.resolve(__dirname, "src/views/"),
        "@constants": path.resolve(__dirname, "src/constants/"),
        "@models": path.resolve(__dirname, "src/models/"),
        "@styles": path.resolve(__dirname, "styles/"),
      },
      fallback: {
        stream: require.resolve("stream-browserify"),
        crypto: require.resolve("crypto-browserify"),
      },
    },
    output: {
      path: path.resolve(__dirname, "dist"),
    },
    devServer: {
      compress: true,
      port: 8080,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new DefinePlugin(envKeys),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        favicon: "./public/favicon.ico",
      }),
    ],
  };
};
