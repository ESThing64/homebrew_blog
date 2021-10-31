
const { Comment } = require('../models');

const commentData = [
  {
    comment_body: 'Great!',
  },
  {
    comment_body: 'I dont like it',
  }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
