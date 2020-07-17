import path from 'path';
import webpack from 'webpack';
import baseConfig, { favicon } from './webpack.config.base';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';

const plugins = baseConfig.plugins?.concat(new FaviconsWebpackPlugin(favicon));

const config: webpack.Configuration = {
  ...baseConfig,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    clientLogLevel: 'warning',
    historyApiFallback: true,
    stats: 'errors-only',
  },
  devtool: 'inline-source-map',
  mode: 'development',
  plugins,
};

export default config;
