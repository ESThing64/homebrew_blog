const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userSeeds.json');
const postData = require('./postSeeds.json');
const CommentData = require('./comment-seeds.json')



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

 
  await Post.bulkCreate(postData)
 await Comment.bulkCreate(CommentData)
 


 
  

  process.exit(0);
};






seedDatabase();

