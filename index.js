const express = require ('express');

const server = express();

const fetch = require('node-fetch');

server.use(express.json());


fetch('https://api.github.com/users/takenet/repos')
  .then(res => res.json())
  .then(json => console.log(json));


server.get("/repos", (req, res) => {
  return res.json(fetch);
});


server.listen(3000);