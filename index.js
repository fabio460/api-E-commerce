const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;
const route = require('./routes');
app.use(express.json());

app.use(route)

app.listen(PORT)