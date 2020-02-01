const express = require ('express');

const server = express();

const fetch = require('node-fetch');


async function getReposAsync () {

  let response = await fetch('https://api.github.com/users/takenet/repos')
  let data = await response.json();
  return data;
  
}


server.use(express.json());
server.get("/repos", (req, res) => {
  
    getReposAsync().then(result => {
        res.status(200).json(result)
    }).catch( err =>{
        res.status(500).json(err)
    })

  //return res.status(200).json({'d':'a'});
});


server.listen(3000);