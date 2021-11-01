const router = require('express').Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

router.get('/', forwardAuthenticated, async (req, res) => {
  try {
   
    
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/test', async (req, res) => {
  try {
   
    
    res.render('newpost'); 
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', ensureAuthenticated, async (req, res) => {
  try {
   
    
    res.render('dashboard'); 
  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;
