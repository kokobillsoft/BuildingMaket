
// http://127.0.0.1/echo?message=Hello -> Hello
 
var http = require('http');
var url = require('url');
 
var server = new http.Server(function(req, res){ // запуск сервера
    console.log ( req.method, req.url );         // вывод в консоль метода и тела запроса
 
    var urlParsed = url.parse(req.url, true);    // парсинг URL 
    console.log(urlParsed);                       
 
    if(urlParsed.pathname == '/echo' && urlParsed.query.message){
        if(urlParsed.query.message == 'Test1'){
            res.end("Test1 command found");
        }
        if(urlParsed.query.message == 'test2'){
            res.end("test2 command found");
        }
        res.end("Bad command");
    }else{
        res.statusCode = 404;
        res.end("Page not found");
    }
});
 
server.listen(1337, '127.0.0.1');