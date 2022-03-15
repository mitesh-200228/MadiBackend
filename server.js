require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const router = require('./router.js');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser');
const connection = require('./connection/connection.js');
connection();
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT,(req, res) => {
    console.log(`Server is running on ${PORT}`);
});