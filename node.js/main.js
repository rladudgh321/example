const fs = require('fs');
const http = require('http');
const url = require('url');

function templateHTML(title, list, body){
    return `
    <html>
    <head>
        <title>${title}</title>
    </head>
    <body>
        <h1><a href="/">web</a></h1>
        <ol>
            ${list}
        </ol>
        <a href="/create">create</a>
        ${body}
    </body>
    </html>
    `;
}

function templateList(getlistdir){
    let list ='';
    // for(let i=0;i<getlistdir.length;i++){
    //     list += `<li><a href="/?id=${getlistdir[i]}">${getlistdir[i]}</a></li>`;
    // }
    // return list;

    getlistdir.forEach(element => {
        list += `<li><a href="/?id=${element}">${element}</a></li>`;
    });
    return list;
}

const app = http.createServer(function(request,response){
    let queryData = url.parse(request.url,true).query;
    let pathname = url.parse(request.url, true).pathname;
    // console.log(url.parse(request.url,true));
    // console.log(queryData.id);
    if(pathname === '/'){
        if(queryData.id === undefined){
            fs.readdir('./data',function(error,filelist){
                let title = 'welcome';
                let data = 'hello node.js';
                const list = templateList(filelist);
                let template = templateHTML(title,list,`<h2>${title}</h2><p>${data}</p>`);
                response.writeHead(200);
                response.end(template);
            });
        } else {
            fs.readdir('./data',function(error,filelist){
                fs.readFile(`./data/${queryData.id}`,'utf8',function(error, data){
                    let title = queryData.id;
                    const list = templateList(filelist);
                    let template = templateHTML(title,list,`<h2>${title}</h2><p>${data}</p>`);
                    response.writeHead(200);
                    response.end(template);
                });
            });
        }

    } else if(pathname === '/create'){
        fs.readdir('./data',function(error,filelist){
            let title = 'welcome';
            const list = templateList(filelist);
            let template = templateHTML(title,list,`<h2>${title}</h2>
            <form action="/create_process" method="post">
            <p><input type="text" name="title" placeholder="title" /></p>
            <p><textarea placeholder="description" name="description"></textarea></p>
            <p><input type="submit" value="create" /></p>
            </form>
            `);
            response.writeHead(200);
            response.end(template);
        });
    } else if(pathname === '/create_process'){
            response.writeHead(200);
            response.end('success');
    }else {
        //NOT FOUND
            response.writeHead(404);
            response.end('NOT FOUND');
    } 
});
app.listen(3002);