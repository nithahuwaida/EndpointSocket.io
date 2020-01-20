
require("dotenv/config");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const socket = require("socket.io");

const Router = require("./src/routes");

const app = express();
const port = 8000;
const nodeEnv = 'Development'

const server = app.listen(port, () => {
	console.log(`Server is running in port ${port} in ${nodeEnv} Node`);
})

app.use(express.static('public'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const io = socket(server);
io.on('connection', (socket) => {
    console.log('made socket connection', socket.id);
    socket.on('comment', function(data){
        io.sockets.emit('comment', data);
    });
    socket.on('like', function(data){
        io.sockets.emit('like', data);
    });
});

app.use('/', Router);
module.exports = app;