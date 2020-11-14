const express = require('express');
const cors = require('cors');
const https = require('http');
require('dotenv').config();

const app = express();
app.use(cors());

https.createServer(app);

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  const oauthToken = process.env.OAUTH_TOKEN;

  res.send({
    status: 'sucess',
    token: oauthToken
  })
});

app.listen(PORT, () => { 
  console.log("server is running on", `http://localhost:${PORT}`); 
});