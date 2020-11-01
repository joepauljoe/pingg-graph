const express = require('express');

var app = express();
const port = 9000;

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.listen(port, () => {
    console.log("Server live @ http://localhost:" + port);
})