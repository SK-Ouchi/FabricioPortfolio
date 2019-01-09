const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const API_PORT = 3002;

var albumRoutes = require('./routes/albums');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/albums',albumRoutes);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));