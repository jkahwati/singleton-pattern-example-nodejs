let TokenConsumer = require('./singleton')
const readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function searchPrompt() {
  rl.question('Obtener Token > ', input => {
    if( input == 'exit' )
      return rl.close();

    var tokenConsumer = new TokenConsumer();
    var token = tokenConsumer.get("user:password")
    console.log("--------------------------------------------------")
    console.log("Su token es:",token)
    console.log("--------------------------------------------------")
    searchPrompt();
  });
}

searchPrompt();