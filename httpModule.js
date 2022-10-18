const http = require('http');


const server = http.createServer((req,res)=>{
    if(req.url === '/')
    res.end('Welcome to homepage');
    if(req.url === '/about'){
    res.end('Short story about my httpModule');
    }
    else {
        res.end(`
            <h1>Ooops</h1>
            <p>We cannot find the page you are looking for</p>
            <a href='/'>Back to Home</a>
        `)
    }
})

server.listen(5000)