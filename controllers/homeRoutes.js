const router = require('express').Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const { Post, User, Comment } = require('../models');
router.get('/', forwardAuthenticated, async (req, res) => {
  try {
    console.log('heyyy')
    postData = await Post.findAll ({
      include: [
        {
  
            model: User,
            attributes: ['name']
        }
    ]
})
  
     const posts = postData.map(e => e.get({plain: true}));
     console.log(posts)

     res.render('homepage', {posts, loggedIn: req.session.loggedIn}) 
   
    
    
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
