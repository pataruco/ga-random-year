import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import path from 'path';
import TerserJSPlugin from 'terser-webpack-plugin';
import webpack from 'webpack';
import baseConfig, { favicon } from './webpack.config.base';

const plugins = baseConfig.plugins?.concat(
  new FaviconsWebpackPlugin({
    logo: favicon,
    favicons: {
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        yandex: false,
        windows: false,
      },
    },
  }),
  new webpack.IgnorePlugin({
    resourceRegExp: /^\.\/locale$/,
    contextRegExp: /moment$/,
  }),
);

const config: webpack.Configuration = {
  ...baseConfig,
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserJSPlugin({ extractComments: true }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  output: {
    ...baseConfig.output,
    path: path.resolve(__dirname, '../build'),
  },
  plugins,
};
export default config;
