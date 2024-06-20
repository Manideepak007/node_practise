const http = require("http");

const server = http.createServer((req, res) =>{
    // console.log(req);
    if(req.url === "/"){
        res.end("Hello Manideepak, Welcome!!")
    }
    if(req.url === "/about"){
        res.end("About Company:")
    }else{
        res.end(`
        <h1>OOPS!! Error</h1>
        <p>Unable to reach out to the page</p>
        <a href="/">Go Back</a>
    `)    }

    res.end();
})

server.listen(3001);