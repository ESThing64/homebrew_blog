const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');



//new post
router.get('/', withAuth, (req, res) => {
  try {
  
   
    res.render('newpost',  { loggedIn: req.session.loggedIn })

  } catch (err) {
    res.status(500).json(err);
  }
});




router.post('/new', withAuth,  async (req, res) => {
    try {

      console.log("============================================================================================")
      console.log("============================================================================================")
      console.log("===============================Hey==================================================")
      console.log("============================================================================================")
       
        newPostData = await Post.create({
            post_name: req.body.post_name,
            post_body: req.body.post_body,
            user_id: req.session.user_id
        });
  
   
    res.json(newPostData)
    } catch (err) {
      res.status(500).json(err);
    }
  });










module.exports = router;