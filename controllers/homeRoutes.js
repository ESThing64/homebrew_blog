const router = require('express').Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
router.get('/', forwardAuthenticated, async (req, res) => {
  try {

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
   
    // console.log(req.session.user_id)
    dashData = await Post.findAll({
      where: { user_id: req.session.user_id},
      attributes:['id','post_name','post_body','user_id'],
      include: [
        {

          model: User,
          attributes: ['name']
        }
      ]
    
    
    })

      // console.log(dashData)
      console.log("=========================================================")

    const posts = dashData.map(e => e.get({ plain: true }));
    console.log('+++++++++++++++++++heyyy++++++++++++++++++++++++++')
    console.log('+++++++++++++++++++heyyy++++++++++++++++++++++++++')
    console.log('+++++++++++++++++++heyyy++++++++++++++++++++++++++')
    console.log('+++++++++++++++++++heyyy++++++++++++++++++++++++++')
    console.log('+++++++++++++++++++heyyy++++++++++++++++++++++++++')
    console.log('+++++++++++++++++++heyyy++++++++++++++++++++++++++')
    console.log('+++++++++++++++++++heyyy++++++++++++++++++++++++++')
    console.log('+++++++++++++++++++heyyy++++++++++++++++++++++++++')
    console.log('+++++++++++++++++++heyyy++++++++++++++++++++++++++')
    console.log(posts)

    res.render('dashboard', { posts, loggedIn: req.session.loggedIn })

  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;
