const sequelize = require('../config/connection');
const { User, Posts, Conv, Comment } = require('../models');

const userData = require('./userSeeds.json');
const postsData = require('./postSeeds.json');
// const seedComment = require('./comment-seeds')
// const seedConv = require('./conv-seeds')

const CommentData = require('./comment-seeds.json')
const ConvData = require('./conv-seeds.json')


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postsData) {
    await Posts.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

 
  

  process.exit(0);
};

const seedComment = async () => {
  await sequelize.sync({ force: true });

  await Comment.bulkCreate(CommentData)

   await Conv.bulkCreate(ConvData)


};





seedDatabase();

seedComment()