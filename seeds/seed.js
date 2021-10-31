const sequelize = require('../config/connection');
const { User, Posts } = require('../models');

const userData = require('./userSeeds.json');
const postsData = require('./postSeeds.json');

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

seedDatabase();
