const net = require('net');

const { IP, PORT,  } = require('./constants');
 
const connect = function() {
  const conn = net.createConnection({
    host: IP, 
    port: PORT
  });
  conn.setEncoding('utf8'); //incoming data is encoded as text
 
 conn.on('connect', () => {  // adds the player initals to snake
    console.log("Connection Established");
    conn.write('Name: LRW');    
  });
  
  conn.on('data', (data) => {
    console.log('Server says:', data);   // return msg from server if player idles to long
  });
  return conn;
};

module.exports =  { connect };
