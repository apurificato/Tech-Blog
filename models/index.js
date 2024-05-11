const sequelize = require('../db/client');
const User = require("./User");
const Blog = require("./Blog");

// Define associations
User.hasMany(Blog, { foreignKey: "userId" });
Blog.belongsTo(User, { foreignKey: "userId" });

module.exports = { User, Blog };