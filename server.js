const express = require('express')
const app=express();
const http=require('http')
const {Server} = require('socket.io')

const PORT = process.env.PORT || 3001;

const server=http.createServer(app);
const io=new Server(server);


io.on('connection' , (socket) => {
    console.log('socket : ',socket.id);
})













server.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`)
);