const http = require('http')
// const fs = require('fs')

// const htmlData = fs.readFileSync('index.html')
const server = http.createServer((req, res)=>{
    res.end('Captain America: Avengers Assemble Why? Not!')
})

server.listen(3000,()=>{
    console.log('Server running on port 3000')
})