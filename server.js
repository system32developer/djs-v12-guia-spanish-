const express = require('express')
const server = express();

server.all('/', (req, res) => {
  res.send('Bot online');
});
function alive(){
server.listen(3000, () => { console.log('Servidor listo!') }); // revisen el archivo index
}
module.exports = alive;