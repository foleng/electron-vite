

const getUrl = () => {
  return {
    name: 'get-url',
    async options(inputOptions, a, b) {
      //inputOptions.input = './src/main.js';
    },
    async buildStart(inputOptions) {
      // console.log('buildStart', JSON.stringify(inputOptions));
    },
    configResolved(resolvedConfig) {
      // console.log(resolvedConfig);

      // store the resolved config
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        console.log(req, res);

        // custom handle request...
      })
    }
  }
}


export default getUrl;