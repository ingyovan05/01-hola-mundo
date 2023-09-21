const http = require('node:http')
const fs = require('node:fs')

const { puertodisponible } = require('./free-port.js')

const processrequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  if (req.url === '/') {
    res.statusCode = 200
    res.end('<h1>Bienvenido a mi página de  3 inicio</h1>')
  } else if (req.url === '/image-super-bonita.png') {
    fs.readFile('./placa.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404
    res.end('<h1> 404 </h1>')
  }
}

const server = http.createServer(processrequest)

puertodisponible(3001).then(port => {
  server.listen(port, () => {
    console.log(`Servidor listening on port http://localhost:${port}`)
  })
})
