const path = require('path');

module.exports = {
  mode: 'development', // O 'production'
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Añade .jsx a las extensiones que Webpack debe resolver
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Añade soporte para archivos .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.css$/i, // Añade soporte para archivos CSS
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};
