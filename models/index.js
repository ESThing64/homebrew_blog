const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
//user has many 
// Categories have many Products
User.hasMany(Post, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});
// Products belongsTo Category
//  belongs to user

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: "post_id"
});

// Products belongToMany Tags (through ProductTag)
// belongs to many conversations    (through conv)





// Tags belongToMany Products (through ProductTag)
//comments belongs to many   (trough conversations?)
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post,{
 foreignKey: "post_id"
});


module.exports = { User, Post, Comment };
