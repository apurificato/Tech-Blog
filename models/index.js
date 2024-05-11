const sequelize = require('../db/client');

// Model Imports
const User = require('./User');
const Blog = require('./Blog');

// Associations between Models defined:
(function associateModels() {
  User.associate({ Blog });
})();

module.exports = {
  User,
  Blog
};