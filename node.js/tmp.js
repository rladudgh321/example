const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
function templateHTML(title, list, data){
    return `
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
            ${list}
        </ol>
        <a href="/create">create</a>
        <h2>${title}</h2>
        <p>${data}</p>
    </body>
    </html>
    `;
}

function templateList(filelist){
    let list ='';
    filelist.forEach(element => {
        list +=`<li><a href="/?id=${element}">${element}</a></li>`;
    });
    return list;    
}

const app = http.createServer(function(request, response){
    let queryData = url.parse(request.url,true).query;
    console.log(url.parse(request.url,true));
    const pathname = url.parse(request.url,true).pathname;
    console.log(pathname);
    if(pathname === '/'){
        if(queryData.id === undefined){
            fs.readdir('./data',function(error,filelist){
                const list = templateList(filelist);
                let title = 'welcome';
                let data = 'node.js';
                const template = templateHTML(title,list,data);
                response.writeHead(200);
                response.end(template);
            });
        } else {
            fs.readdir('./data',function(error,filelist){
                fs.readFile(`./data/${queryData.id}`,'utf8',function(error,data){
                    const list = templateList(filelist);
                    let title = queryData.id;
                    const template = templateHTML(title,list,data);
                    response.writeHead(200);
                    response.end(template);
                });
            });
        }
    } else if(pathname === '/create'){
        fs.readdir('./data',function(error,filelist){
            const list = templateList(filelist);
            let title = 'CREATE';
            let data = `
            <form action="craete_process" method="post">
            <p><input type="text" name="title" placeholder="title" /></p>
            <p><textarea name="description" placeholder="description"></textarea></p>
            <p><input type="submit" value="create" /></p>
            </form>
            `;
            const template = templateHTML(title,list,data);
            response.writeHead(200);
            response.end(template);
        });
    } else if(pathname === '/craete_process'){
        let body = '';
        request.on('data',function(data){
            //post로 과부하적으로 데이터 받을 때 처리할수 있다
            body += data;
        });   
        request.on('end',function(){
            let post = qs.parse(body);
            let title = post.title;
            let description = post.description;
            fs.writeFile(`./data/${title}`,description,'utf8',function(error){
                response.writeHead(302, {Location:`/?id=${title}`});
                response.end();
            });
        });
    } else {
            response.writeHead(404);
            response.end('notFound');
    }
});
app.listen(3002);