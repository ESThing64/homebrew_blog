const { Conv } = require('../models');

const convData = [
  {
    user_id: 1,
    conv_id: 1,
  },
  {
    user_id: 2,
    conv_id: 2,
  }
];

const seedConv = () => Conv.bulkCreate(convData);

module.exports = seedConv;
