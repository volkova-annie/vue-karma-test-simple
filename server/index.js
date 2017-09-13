const path = require('path');
const express = require('express');
const app = express();

app.use('/static', express.static('static'));

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

app.get('*', function (req, res) {
  res.status(200).render('index.pug');
});

app.listen(4000, function () {
  console.log('Server listening on port 4000!');
});
