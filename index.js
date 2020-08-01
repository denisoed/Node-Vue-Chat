const app = require('express')();
const http = require('http').createServer(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

http.listen(3000, () => {
  console.log('Server running on 3000 port');
});
