const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/new', withAuth, async (req, res) => {
  try {
    console.log

   
    newPostData = await Comment.create({
      comment_body: req.body.comment_body,
      post_id: req.body.post_id,
      user_id: req.session.user_id
    });


    res.json(newPostData)
  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;