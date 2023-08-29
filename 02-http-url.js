const http = require(`http`)

const server = http.createServer((req,res)=> {
    const url =req.url 
    if(url ==`/`){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(`<div>
                            <nav>
                                <a href ="/">Home</a>
                                <a href ="/About">About</a>
                                <a href ="/Users">Users</a>
                                <a href ="/Contact">Contact</a>
                            </nav>
                            <div>
                            <h1>Home Page</h1>  
                            </div>
        </div>`)
        res.end()
    }else if (url === `/About`){
        res.writeHead(200,{'contrnt-type':"text/html"})
        res.write(`<div>
        <nav>
            <a href ="/">Home</a>
            <a href ="/About">About</a>
            <a href ="/Users">Users</a>
            <a href ="/Contact">Contact</a>
        </nav>
        <div>
        <h1>About Page</h1>  
        </div>
        
</div>`)
        res.end()
    } else {
        res.writeHead(404,{'contrnt-type':"text/html"})
        res.write(`<div>
        <nav>
            <a href ="/">Home</a>
            <a href ="/About">About</a>
            <a href ="/Users">Users</a>
            <a href ="/Contact">Contact</a>
        </nav>
        <div>
        <h1>Page Not found</h1>  
        </div>
</div>`)
            res.end()
    }
})  
 server.listen(3040,()=>{
    console.log(`server is started @http://localhost:3040`)
 })