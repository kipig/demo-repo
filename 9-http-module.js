const http = require('http')

const server = http.createServer((req, res) => {
  // console.log(req)
  if (req.url === '/') {
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    res.end('Welcome to our about page')
  } else {
    res.end(`
    <h1>Ooops!</h1>
    <p>We can't seem to find the page</p>
    <a href="/">back home</a>
    `)
  }
})

server.listen(5000)
