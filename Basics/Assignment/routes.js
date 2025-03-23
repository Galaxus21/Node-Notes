function requestHandler(req,res){
    const url = req.url;
    const method = req.method;
    const users = ['user1','user2','user3']
    if(url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<h1>Hello,This is Home page !</h1>');
        res.write("<form action='/create-user' method='POST'><input name='username' type='text'/><button type='submit'>post</button></form>")
        return res.end();
    };
    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsedData = Buffer.concat(body).toString().split('=')[1];
            users.push(parsedData);
            console.log(parsedData);
        });
        // res.statusCode = 302;
        // res.setHeader('Location','/users');
        res.writeHead(302,{'Location':'/users'})
        return res.end();
    };
    if(url === '/users'){
        res.setHeader('Content-Type','text/html');
        res.write('<ul>');
        users.forEach((user)=>{
            res.write(`<li>${user}</li>`);
        });
        res.write('</ul>');
        return res.end();
    };
    res.setHeader('Content-Type','text/html');
    res.write('<h1> Hello from Node Server ! </h1>');
    res.end();

}

exports.handler = requestHandler;