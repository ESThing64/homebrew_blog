const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/users', userRoutes);



module.exports = router;
