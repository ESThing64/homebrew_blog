const router = require('express').Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const { Posts, User, Comment } = require('../models');
router.get('/', forwardAuthenticated, async (req, res) => {
  try {
    console.log('heyyy')
    postData = await Posts.findAll ({
        attributes:[
          'id',
          'name',
          'post_body',
          'created_at'
        ],
        include: [{
          model:Comment,
          attributes: [
            'id',
            'comment_body',
            'user_id',
            'posts_id',
            'created_at'
          ],
          include: {
            model: User,
            attributes: ['name']
          }
        }]
        
    });
    
     const posts = postData.map(posts => posts.get({plain: true}));
     console.log(posts)

     res.render('homepage'), {posts, loggedIn: req.secure.loggedIn}
   
    
    
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
