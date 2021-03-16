module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  publicPath: process.env.NODE_ENV === 'production'
    ? '/beer-star-club/'
    : '/'


}
