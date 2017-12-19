var ws = require("nodejs-websocket")

var PORT  = 8001
var server = ws.createServer(function(conn){
  console.log("New Conn")
  conn.on("text",function(str) {
    conn.sendText(str.toUpperCase()+"!!!!")
  })
  conn.on("close",function(){
    console.log("Connection closed")
  })

  conn.on("error",function(error){
    console.log("error")
    console.log(error)
  })
}).listen(PORT)

console.log("websocket open at 8001")