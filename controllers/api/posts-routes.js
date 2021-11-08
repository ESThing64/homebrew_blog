const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//this route is /api/posts?

//new post
router.get('/', withAuth, (req, res) => {
  try {


    res.render('newpost', { loggedIn: req.session.loggedIn })

  } catch (err) {
    res.status(500).json(err);
  }
});




router.post('/new', withAuth, async (req, res) => {
  try {
   
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


router.get('/:id', withAuth, async (req, res) => {
  try {

    postData = await Post.findOne({
      where: { id: req.params.id },
      attributes: ['id', 'post_name', 'post_body', 'user_id', 'date_created'],
      include: [{
        model: User,
        attributes: ['name']
    },
    {
        model: Comment,
        attributes: ['id', 'comment_body', 'date_created'],
        include: {
            model: User,
            attributes: ['name']
        }
    }
]




    })

    // console.log(postsData)

    const post = postData.get({ plain: true });


    console.log(post)

    res.render('viewpost', {post, loggedIn: req.session.loggedIn })

  } catch (err) {
    res.status(500).json(err);
  }
});








module.exports = router;