
let express = require('express');
let app = express();
let server = app.listen(3000); //usar el puerto 3000

app.use(express.static('public'));

console.log("prueba de socket server");