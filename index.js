// const express = require('express');
// const path = require('path');
// const app = express();

// const port = process.env.PORT || 3000;

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });
// app.listen(port, () => {
//   console.log('Server started on port '+port);
// });
const express = require('express');
const path = require('path')

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  console.log('Server started on port '+port);
});