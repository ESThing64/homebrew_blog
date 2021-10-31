const User = require('./User');
const Posts = require('./Posts');
const Conv = require('./Conv');
const Comment = require('./Comment');
//user has many posts
// Categories have many Products
User.hasMany(Posts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Products belongsTo Category
// posts belongs to user

Posts.belongsTo(User, {
  foreignKey: 'user_id'
});


// Products belongToMany Tags (through ProductTag)
//posts belongs to many conversations    (through conv)
Posts.belongsToMany(Conv,  {
 
  through: {
    model: Conv,
    unique: false
  },
  foreignKey: "conv_id"
  
})



// Tags belongToMany Products (through ProductTag)
//comments belongs to many posts  (trough conversations?)

Comment.belongsToMany(Posts,{
  through: {
    model: Conv,
    unique: false
  },
  foreignKey: "comment_id"
})


module.exports = { User, Posts, Conv, Comment };
