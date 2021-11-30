module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'file-loader?name=img/[name].[ext]?[hash]',
}
