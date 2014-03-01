
var coino = require('./lib');

var client = new coino.Client({
  host: 'localhost',
  port: 14444,
  user: 'username',
  pass: 'password'
});

client.cmd('getbalance', '*', 6, function(err, balance){
  if (err) return console.log(err);
  console.log('Balance:', balance);
});

