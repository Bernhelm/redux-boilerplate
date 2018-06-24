var express = require('express');
var app = express();

app.use(express.static('coverage/lcov-report'));

app.listen(9002);