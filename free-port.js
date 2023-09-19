const net = require('node:net')

function puertodisponible (desiredport) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desiredport, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        puertodisponible(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { puertodisponible }
