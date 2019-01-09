const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const API_PORT = 3002;
const path = require('path');

var albumRoutes = require('./routes/albums');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/api/albums',albumRoutes);

app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, '../client/build/index.html'))
});

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));