const router = require('express').Router();
const { Post, User, Comment } = require('../../models');



//create new post

router.post('/', withAuth, async (req, res) => {
    Post.create({
            post_name: req.body.post_name,
            post_body: req.body.post_bod,
            user_id: req.session.user_id
        })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});









module.exports = router;