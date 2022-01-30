module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
};
// module.exports = {
//   watchOptions: {
//     aggregateTimeout: 200,
//     poll: 1000,
//   },
// };
