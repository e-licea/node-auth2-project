const server = require('./api/server');
//imports

//middlewares

//PORT
const PORT = 6969;

server.listen(PORT, ()=>{
    console.log(`****SERVER IS RUNNING ON PORT : ${PORT}`);
});