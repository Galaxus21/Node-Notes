// Some Core Modules
// 1. http
// 2. https
// 3. fs
// 4. path
// 5. os

const fs = require('fs');
const http = require('http');
/* 
    This is a way to import a global module, 
    this way (not using './'),
    it won't import a locally created file of the same name.
*/

/*
    To import a local file, use 
    require('./http')
*/

// ............................................................................
// Creating a server 
// ............................................................................

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method==='POST') {
        const body = [];
        req.on('data', (chunk)=>{   //Event Listener for storing stream of data
            body.push(chunk);
        });
        req.on('end', ()=>{         //Event Listener for when stream of data ends
            const parsedBody = Buffer.concat(body).toString();
            fs.writeFile('message.txt', parsedBody, err => {});
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        // res.writeHead(302)
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');  //Headers are added to transport metadata
    res.write('<html>');
    res.write('<body><h1>Hello World from Node.js Server!!!</h1></body>');
    res.write('</html>');
    res.end();
    // Can't write anything after ending the response.
});
server.listen(3000);

// The server keeps on running in an event loop, and the request listener function is triggered on every event.
// To stop the server, we can use process.exit() in the function to hard exit the event loop.




// Worker Pool - manages different threads for node heavy operations, works seperately from js.