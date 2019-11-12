const express = require('express');

const multer = require('./src/middleware/multer-config');

const Article = require('./src/controllers/Article');
const Gif = require('./src/controllers/Gif');

const app = express();

app.use(express.json());

app.post('/api/v1/articles', Article.create);

app.post('/api/v1/gifs', multer, Gif.create);

module.exports = app;