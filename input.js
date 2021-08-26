let connection;

const handleUserInput = function(key) {

  if (key === '\u0003') {
    process.exit();
    } else if (key === '\u0077') { // a series of else if statements controlling movement.
      connection.write("Move: up");
    } else if (key === '\u0061') {
      connection.write("Move: left");
    } else if (key === '\u0064') {
      connection.write("Move: right");
    } else if (key === '\u0073') {
      connection.write("Move: down");
    } else if (key === '\u0031') { //canned messages 1 2 3    
      connection.write("Say: Hi, I mean hiss");
    } else if (key === '\u0032') {
      connection.write("Say: Ssss");
    } else if (key === '\u0033') {
      connection.write("Say: Let's Go!"); // I stayed with the Unicode to be consistant with crt+c to close the program, and if I wanted to add arrow key functionality in the future
    }  
};


const setupInput = function(conn) {                              
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');  
  stdin.resume(); 
  stdin.on('data', key => handleUserInput(key));
  return stdin;
};



module.exports = { setupInput };