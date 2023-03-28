const http = require('http');
const fs = require('fs');
const url = require('url');



const app = http.createServer(function(request, response){
    let queryData = url.parse(request.url,true).query;
    console.log(url.parse(request.url,true).query.id);
    const pathname = url.parse(request.url,true).pathname;
    if(pathname === '/'){
        if(queryData.id === undefined){
                let title = 'welcome';
                let data = 'node.js';
                const template = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>${title}</title>
                </head>
                <body>
                    <h1><a href="/">WEB</a></h1>
                    <ol>
                        <li><a href="/?id=html">html</a></li>
                        <li><a href="/?id=css">css</a></li>
                        <li><a href="/?id=javascript">javascript</a></li>
                    </ol>
                    <h2>${title}</h2>
                    <p>${data}</p>
                </body>
                </html>
                `;
                response.writeHead(200);
                response.end(template);
        } else {
            fs.readFile(`./data/${queryData.id}`,'utf8',function(error,data){
                let title = queryData.id;
                const template = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>${title}</title>
                </head>
                <body>
                    <h1><a href="/">WEB</a></h1>
                    <ol>
                        <li><a href="/?id=html">html</a></li>
                        <li><a href="/?id=css">css</a></li>
                        <li><a href="/?id=javascript">javascript</a></li>
                    </ol>
                    <h2>${title}</h2>
                    <p>${data}</p>
                </body>
                </html>
                `;
                response.writeHead(200);
                response.end(template);
            });
        }
    } else {
            response.writeHead(404);
            response.end('notFound');
    }
});
app.listen(3002);