const User = require('./User');
const Posts = require('./Posts');
const Comment = require('./Comment');
//user has many posts
// Categories have many Products
User.hasMany(Posts, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});
// Products belongsTo Category
// posts belongs to user

Posts.belongsTo(User, {
  foreignKey: 'user_id'
});

Posts.hasMany(Comment, {
  foreignKey: "posts_id"
});

// Products belongToMany Tags (through ProductTag)
//posts belongs to many conversations    (through conv)





// Tags belongToMany Products (through ProductTag)
//comments belongs to many posts  (trough conversations?)
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Posts,{
 foreignKey: "posts_id"
});


module.exports = { User, Posts, Comment };
