module.exports = {
  swcMinify: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
        } 
      ]
    })
    return config
  },
}