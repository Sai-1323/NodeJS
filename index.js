const fs = require("fs");
const http = require("http");
const os = require("os");

console.log(os.tmpdir())
console.log(os.type())
console.log(os.arch())
// console.log(os.release())
// console.log(os.cpus())
// console.log(os.totalmem())

var writeFile = fs.writeFileSync('lol.txt',"Hi!");

var readFile = fs.readFileSync('lol.txt','utf-8');
console.log(readFile)

fs.readFile('lol.txt','utf-8',(err,data)=>{
    if (!err) {
        fs.writeFile('xyz.txt',data,(err)=>{
            if(err) console.error(err)
            console.log(fs.readFileSync('xyz.txt','utf-8'));
        });        
    } else {
        console.error(err)
    }
});

var readFileStream = fs.createReadStream('lol.txt','utf-8')
var count = 0;
readFileStream.on("data",(chunk)=>{
    console.log("No of chunks :"+ ++count);
});

let server = http.createServer((req,res)=>{
    console.log(req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><h1>Hello World!</h1><br/>');
    if (req.url==='/') {
        res.write("Welcome to Http Server")
        res.write("</body></html>")
        res.end();
    }else if(req.url==='/about'){
        res.write("This is the about page")
        res.write("</body></html>")
        res.end();
    }else {
        res.write("No Resources Found")
        res.write("</body></html>")
        res.end();
    }
})
server.listen(8085);
console.log("Server Started")
console.log("End of Execution");
