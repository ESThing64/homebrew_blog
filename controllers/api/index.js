const router = require('express').Router();
const userRoutes = require('../userRoutes')
const postRoutes = require('./posts-routes');
const commentsRoutes = require('./comments-routes');


router.use('/posts', postRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;
