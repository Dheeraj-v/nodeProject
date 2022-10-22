const http = require('http');

//first method of creating server
/*
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

*/

// second method using event emitter

const server2 = http.createServer();

server2.on('request', (req,res)=>{
    res.end('Welcome')
})

server2.listen(5000);