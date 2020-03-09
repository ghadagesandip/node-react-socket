const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
var cors = require('cors')

const port = process.env.PORT || 4001;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());

io.on("connection", socket => {
  
  console.log("New client connected", socket.id);

  //Here we listen on a new namespace called "incoming data"
  socket.on("incoming data", (data)=>{
      //Here we broadcast it out to all other sockets EXCLUDING the socket which sent us the data
     socket.broadcast.emit("outgoing data", {num: 20});
  });

// setInterval(function(){
//    console.log('set event')
//    socket.broadcast.emit("outgoing data", {num: Math.random()});
// }, 3000)


  //A special namespace "disconnect" for when a client disconnects
  socket.on("disconnect", () => console.log("Client disconnected"));
});


server.listen(port, () => console.log(`Listening on port ${port}`));