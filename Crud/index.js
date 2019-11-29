const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose  =  require('./db');

const rtsIndex = require('./routes/routing');



const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api', rtsIndex);
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
