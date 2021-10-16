const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end('Welcome to our home page')
    }
   if (req.url === '/about'){
       res.end('Here is our short')
   }
   res.end(`
   <h1>OOOPSSS</h1?
   <p>Cannot find page you're looking for!</p>
   <a href="/">back home</a>`)
})

server.listen(5000)