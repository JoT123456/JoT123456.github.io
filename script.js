const http = require('http')
const fs = require('fs')
var url = require('url')
const port = 3000

const server = http.createServer(function(req,res) {
    var q = url.parse(req.url, true);
    res.writeHead(200, { 'Content-Type': 'text/html'})
    if(q.path === '/home' || q.path === '/'){
        fs.readFile('frontend/index.html', function(error, data){
            if(error){
                res.writeHead(404)
                res.write('Error:file not found')
            } else {
                res.write(data)
            }
            res.end()
        })
    } if(q.path === '/about'){
        fs.readFile('frontend/about.html', function(error, data){
            if(error){
                res.writeHead(404)
                res.write('Error:file not found')
            } else {
                res.write(data)
            }
            res.end()
        })
    } 
    if(q.path === '/questions'){
        fs.readFile('frontend/questions.html', function(error, data){
            if(error){
                res.writeHead(404)
                res.write('Error:file not found')
            } else {
                res.write(data)
            }
            res.end()
        })
    } 


})

server.listen(port,function (error){
    if (error){
        console.log("Something went wrong", error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})


