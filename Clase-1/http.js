const http = require('node:http')

const { puertodisponible } = require('./free-port.js')

const server = http.createServer((req, res) => {
  console.log('Request received')
  res.end('Hola mundo')
})

puertodisponible(3001).then(port => {
  server.listen(port, () => {
    console.log(`Servidor  1 listening on port http://localhost:${port}`)
  })
})

// server.listen(0, () => {
//   console.log(`Server listening on port http://localhost:${server.address().port}`)
// })
