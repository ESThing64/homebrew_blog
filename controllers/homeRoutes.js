const router = require('express').Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
router.get('/', forwardAuthenticated, async (req, res) => {
  try {
    console.log('heyyy')
    postData = await Post.findAll({
      include: [
        {

          model: User,
          attributes: ['name']
        }
      ]
    })

    const posts = postData.map(e => e.get({ plain: true }));
    console.log(posts)

    res.render('homepage', { posts, loggedIn: req.session.loggedIn })



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

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    console.log('+++++++++++++++++++heyyy++++++++++++++++++++++++++')
    dashData = await Post.findAll({
      where: { user_id: req.session.user_id},
      attributes:['id','post_name','post_body','user_id'],

      include: [{
        model: Comment,
        attributes: ['created_at', 'id', 'comment_body', 'post_id', 'user_id' ],
        include: {
            model: User,
            attributes: ['name']
        }
    },
   
]


      })

    const posts = postData.map(e => e.get({ plain: true }));
    console.log('heyy duuuuuude================================================')
    console.log(posts)

    res.render('dashboard', { posts, loggedIn: req.session.loggedIn })

  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;
