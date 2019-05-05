const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      { 
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] 
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'] },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};