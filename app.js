const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req);
    res.write("Welcome to web-server")
    res.end()
})

server.listen(9000)