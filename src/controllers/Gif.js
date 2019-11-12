const GifModel = require('../models/Gif');
const cloud = require('../config/cloudinaryConfig')

const Gif = {

    create(req, res) {
        const url = req.protocol + '://' + req.get('host');
        if (!req.body.title && !req.body.image) {
            return res.status(400).send({'message': 'Oops! Looks like something is missing'});
        }

        const gif = GifModel.create(req.body, req.file);
        cloud.uploads(gif);
        
        res.status(201).send({
            'status': 'success',
            'data': {
                'gifId': gif.id,
                'message': 'GIF Image posted successfully!',
                'createdOn': gif.createdOn,
                'title': gif.title,
                'imageUrl': url + gif.imageUrl
            }
        });
    }
}

module.exports = Gif;