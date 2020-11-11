let express = require('express');
let app = express();

app.use(express.static(__dirname));

app.get('*', function (req, res) {

  res.redirect('/');

});

let port = process.env.PORT || 3000
app.listen(port);
console.log('APP RODANDO NA PORTA', port);