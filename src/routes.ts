import express from 'express';

const routes = express.Routes();

routes.get("/", (req, res ) => {
    return response.json({ message: 'Hello Word'});
});

export