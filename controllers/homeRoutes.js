const router = require('express').Router();


router.get('/', async (req, res) => {
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




module.exports = router;
