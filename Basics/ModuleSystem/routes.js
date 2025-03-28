const fs = require('fs');

const requestHandler = (req,res)=>{
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
        req.on('data', (chunk)=>{
            body.push(chunk);
        });
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            fs.writeFile('message.txt', parsedBody, err => {});
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body><h1>Hello World from Node.js Server!!!</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;

// If we have to export multiple things :

/*module.exports = {
    handler: requestHandler,
    someText: 'Some Text ...'
}*/

// Or

/*
module.exports.handler = requestHandler;
module.exports.someText = 'Some Another Text ....'
*/

// We can omit the module keyword too

// exports.handler = requestHandler;
