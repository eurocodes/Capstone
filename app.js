const express = require('express');

const Article = require('./src/controllers/Article');

const app = express();

app.use(express.json());

app.post('/api/v1/articles', Article.create);


module.exports = app;