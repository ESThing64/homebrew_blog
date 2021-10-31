const sequelize = require('../config/connection');
const { User, Posts, Comment } = require('../models');

const userData = require('./userSeeds.json');
const postsData = require('./postSeeds.json');
const CommentData = require('./comment-seeds.json')



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

 
  await Posts.bulkCreate(postsData)
 await Comment.bulkCreate(CommentData)
 


 
  

  process.exit(0);
};






seedDatabase();

