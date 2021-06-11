const jsonServer = require('json-server') // express/koa/mongoDB
const server = jsonServer.create()
const middlewares = jsonServer.defaults({
  static: './build',
})

const PORT = process.env.PORT || 3001

server.use(middlewares)
server.use(router)

server.listen(PORT, () => {
  console.log('Server is running')
})
