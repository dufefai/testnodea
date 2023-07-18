const http = require('http');
const fs = require('fs'); //file system
const host = "localhost";
const port = process.env.PORT || 3001;
const server = http.createServer((req, res) => {
         if(req.url === "/"){
            fs.readFile("index.html", (err,data)=>{
                if(err){
                    console.error(err)
                }
                else{
                    res.write(data);
                    res.end();
                }
            })
        }
        else if(req.url === "/hanoi"){
            fs.readFile("hanoi.html", (err,data)=>{
                if(err){
                    console.error(err)
                }
                else{
                    res.write(data);
                    res.end();
                }
            })
        }
        else if(req.url === "/danang"){
            fs.readFile("danang.html", (err,data)=>{
                if(err){
                    console.error(err)
                }
                else{
                    res.write(data);
                    res.end();
                }
            })
        }
        else if(req.url === "/cantho"){
            fs.readFile("cantho.html", (err,data)=>{
                if(err){
                    console.error(err)
                }
                else{
                    res.write(data);
                    res.end();
                }
            })
        }
        else if(req.url === "/hcm"){
            fs.readFile("hcm.html", (err,data)=>{
                if(err){
                    console.error(err)
                }
                else{
                    res.write(data);
                    res.end();
                }
            })
        }
        else{
            res.write("<h1>404 - error not found</h1>");
            res.end();
        }
});
server.listen(port,() => {
    console.log("Server is running at http://" + host +":" +port);
});