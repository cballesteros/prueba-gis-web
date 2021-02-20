var express = require('express');
var app = express();

app.use(express.static('./dist/prueba-gis-web'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/prueba-gis-web/'}
  );
});

app.listen(process.env.PORT || 8080);