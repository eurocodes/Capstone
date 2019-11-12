const moment = require('moment');
const uuid = require('uuid');

class Gif {
    /**
     * class constructor
     * @param {object} gif/image
     * 
     */
    constructor() {
        this.gifs = [];
    }

    create(data, file) {
        const newGif = {
            id: uuid.v4(),
            title: data.title,
            imageUrl: '/src/images/' + file.filename,
            createdOn: moment.now()
        };
        this.gifs.push(newGif);
        return newGif
    }
    /**
     * @param {uuid}
     * @returns {object} gif object
     */
    findOne(id) {
        return this.gifs.find(image => image.id);
    }
    /**
     * 
     * @param {uuid} returns all images & articles
     */
    findAll() {
        return this.gifs;
    }
    /**
     * @param {uuid} id
     * @param {object} gif/image
     */
    update(id, data) {
        const gif = this.findOne(id);
        const index = this.gifs.indexOf(gif);
        this.gifs[index].title = data['title'] || gif.title;
        this.gifs[index].gif = data['image'] || gif.image;
        this.gifs[index].modifiedOn = moment.now()
        return this.gif[index];
    }
    /**
     * 
     * @param {uuid} id
     */
    delete(id) {
        const gif = this.findOne(id);
        const index = this.gifs.indexOf(gif);
        this.gifs.splice(index, 1);
        return {};
    }
}

module.exports = new Gif;