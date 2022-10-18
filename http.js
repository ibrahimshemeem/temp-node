const http = require('http');


const server = http.createServer((req, res)=>{

    if(req.url ==='/'){
        res.end('welcome to home page')
    }
    if(req.url ==='/about'){
        res.end('welcome to about page')
    }

    res.end('wrong page')
    // res.write('welcowe to our homepage')
    // res.end()
})

server.listen(5000)