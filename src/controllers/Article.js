const ArticleModel = require('../models/Article');

const Article = {
    /**
     * @param {object} req
     * @param {object} res
     * @param {object} article object
     * 
     */
    create(req, res) {
        if (!req.body.title && !req.body.article) {
            return res.status(400).send({'message': 'Please fill all fields'});
        }
        const article = ArticleModel.create(req.body);
        //res.send(article)
        res.status(201).send({
            "status": "success",
            "data": {
                "message" : "Article successfully posted",
                "articleId" : article.id,
                "createdOn" : article.createdOn,
                "title" : article.title,
                "article": article.article
                }
        })
    },

}

module.exports = Article;