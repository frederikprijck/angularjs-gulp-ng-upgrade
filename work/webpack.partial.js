module.exports = {
  module: {
    rules: [
      {
        test: /src\\app\\.*\.js$/,
        exclude: [/node_modules/],
        use: [{ loader: 'ng-annotate-loader' }]
      },
      {
        test: /src\\app\\.*\.html$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'html-loader',
          options: {
            attributes: false,
            minimize: true
          }
         }]
      }
    ]
  }
};
