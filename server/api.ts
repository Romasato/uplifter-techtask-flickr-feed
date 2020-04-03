import express from 'express';
import axios from 'axios';

const CONFIG = require('../config/envSettings');

type TFlickrPhotoItem = {
    title: string,
    link: string,
    media: {
        m: string
    },
    date_taken: string,
    description: string,
    published: string,
    author: string,
    author_id: string,
    tags: string
};

type TFlickrPhotoItemExtended = {
    title: string,
    link: string,
    media: {
        m: string
    },
    date_taken: string,
    description: string,
    published: string,
    author: string,
    author_id: string,
    tags: string,

    author_email: string,
    author_alias: string
};

function setupAPIRouter() {
    const apiRouter = express.Router();

    apiRouter.get('/flickr/publicPhotos', async (req, res, next) => {
        try {
            const flickrRes = await axios.get(CONFIG.flickr.api.publicPhotosEndpoint, {
                transformResponse: (dataRes) => {
                    // Clean up response removing JSONP function wrapping
                    const updatedData = dataRes.replace(/^flickrResponse\(/i, '').replace(/\)$/ig, '');
                    return JSON.parse(updatedData);
                }
            });

            /* Transform the data before returning
            -------------------------------------------------------------*/
            const dataTransformed = flickrRes.data;
            flickrRes.data.items = flickrRes.data.items.map((photo: TFlickrPhotoItem) => {
                const [, email, alias] = photo.author.match(/^([^\s]+)\s\("([^"]+)"\)/i);
                photo.author_email = email;
                photo.author_alias = alias;
                return <TFlickrPhotoItemExtended>photo;
            });


            res.json(flickrRes.data);
        } catch (err) {
            res.send(err);
        }

    });

    return apiRouter;
}

export default setupAPIRouter;
