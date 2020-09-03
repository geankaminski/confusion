const jsonServer = require('json-server')
const server = jsonServer.create()
const db = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const port = process.env.PORT || 3001;

server.use(middlewares)
server.use(db)
server.listen(port, () => {
  console.log(`JSON Server is running in ${port}`)
}) 