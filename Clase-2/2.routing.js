const http = require('node:http')
const jsonditto = require('./pokemon/ditto.json')

const processrequest = (req, res) => {
  const { method, url } = req
  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charser=utf-8')
          return res.end(JSON.stringify(jsonditto))
        default:
          res.statuscode = 404
          res.setHeader('Content-Type', 'text/html; charser=utf-8')
          return res.end('<h1>404</h1>')
      }
    case 'POST':
      switch (url) {
        case '/pokemon':{
          let body = ''
          // escuchar el evento data
          req.on('data', chunk => {
            body += chunk.toString()
          })
          req.on('end', () => {
            const data = JSON.parse(body)
            res.writeHead(201, { 'Content-Type': 'application/json; charser=utf-8' })
            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })
          break
        }
        default:
          res.statuscode = 404
          res.setHeader('Context-Type', 'text/plain; charset=utf-8')
          return res.end('404 Not Found')
      }
  }
}
const server = http.createServer(processrequest)
server.listen(1234, () => {
  console.log('server listening on port http://localhost:1234')
})
