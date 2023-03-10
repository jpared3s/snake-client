const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");// encodes the text in english (think of it as a translator and utf8 as english)
  conn.on("data", (data) => {
    console.log(data);
  });
  conn.on("connect", () => {// upon connection we are sending the server our name JUP and service will console.log the text once connection confirmed
    conn.write("Name: JUP");
    console.log("Successfully connected to game server");
  });

  return conn;
};

module.exports = connect;