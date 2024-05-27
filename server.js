const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const route = require('./app/route/route');

require('./app/model/db');
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(route);




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));