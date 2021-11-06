const router = require('express').Router();
const userRoutes = require('../userRoutes')
const postRoutes = require('./posts-routes');


router.use('/posts', postRoutes);

module.exports = router;
