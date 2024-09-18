const http = require("http")


let server = http.createServer((req , res)=>{
    if(req.url === "/"){
        res.end(" home page")
    }else if( req.url === "/about"){
        res.end("about page")
    }
})


server.listen(3001 , ()=>{
    console.log("listen in 3001")
})