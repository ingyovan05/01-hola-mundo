const http = require('node:http')

const { puertodisponible } = require('./free-port.js')

const server = http.createServer((req, res) => {
  console.log('Request received', req.url)
  res.end('Hola mundo')
})

puertodisponible(3001).then(port => {
  server.listen(port, () => {
    console.log(`Servidor listening on port http://localhost:${port}`)
  })
})
