import express from 'express';
import axios from 'axios';

const CONFIG = require('../config/envSettings');

function setupAPIRouter() {
    const apiRouter = express.Router();

    apiRouter.get('/flickr/publicPhotos', async (req, res, next) => {
        try {
            const flickrRes = await axios.get(CONFIG.flickr.api.publicPhotosEndpoint, {
                transformResponse: (dataRes) => {
                    const updatedData = dataRes.replace(/^flickrResponse\(/i, '').replace(/\)$/ig, '');
                    return JSON.parse(updatedData);
                }
            });
            res.json(flickrRes.data);
        } catch (err) {
            res.send(err);
        }

    });

    return apiRouter;
}

export default setupAPIRouter;
