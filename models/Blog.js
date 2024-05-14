const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/client');

class Blog extends Model {}

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
          modelName: 'User', // Reference the User model
          key: 'id'
        }
    }
  },
  {
    sequelize,
    modelName: "Blog",
  }
);

module.exports = Blog;
