const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/client');
const User = require('./User'); // Import the User model

class Blog extends Model {}

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User, // Reference the User model
        key: 'id'
      }
    }
  },
  {
    sequelize,
    modelName: 'Blog',

    // Define associations
    associations(models) {
      Blog.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
);

module.exports = Blog;
