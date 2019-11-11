const moment = require('moment');
const uuid = require('uuid');

class Article {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
      this.articles = [];
    }
    
    create(data) {
    const newArticle = {
      id: uuid.v4(),
      title: data.title,
      article: data.article,
      createdOn: moment.now()
    };
    this.articles.push(newArticle);
    return newArticle
  }

}

module.exports = new Article;