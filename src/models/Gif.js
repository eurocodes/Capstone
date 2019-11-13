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
}

module.exports = new Gif;
