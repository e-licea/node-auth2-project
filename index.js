const server = require('./api/server');
//imports
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
//middlewares
server.use(logger('short'), cors(), helmet());

//PORT
const PORT = 6969;

server.listen(PORT, ()=>{
    console.log(`****SERVER IS RUNNING ON PORT : ${PORT}`);
});