const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
console.log(deps);
module.exports = {
  output: {
    publicPath: "http://localhost:8081/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8081,
    historyApiFallback: true,
  },

  module: {
    rules: [
      // {
      //   test: /\.m?js/,
      //   type: "javascript/auto",
      //   resolve: {
      //     fullySpecified: false,
      //   },
      // },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "oton_core",
      filename: "remoteEntry.js",
      remoteType: 'var',
      remotes: {},
      exposes: {
        "./App": "./src/App",
        "./components/SampleHeader": "./src/components/SampleHeader"
      },
      shared: {
        // ...deps,
        react: {
          eager: true,
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          eager: true,
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "swr": {
          eager: true
        },
        // "@emotion/styled": {
        //   eager: true
        // },
        // "@emotion/react": {
        //   eager: true
        // },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
};
