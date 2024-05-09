const User = require('./User')
const Blog = require('./Blog')
const Comment = require('./Post')

User.hasMany(Blog, {
    foreignKey: 'user_id'
  });

Blog.hasOne(User, {
    foreignKey: 'blog_id'
  });

Comment.belongsTo(Blog, {
    foreignKey: 'comment_id'
  });

Comment.belongsTo(Blog, {
    foreignKey: 'comment_id'
  });

Blog.hasMany(Comment, {
    foreignKey: 'blog_id'
  });

module.exports = {User, Blog, Comment}