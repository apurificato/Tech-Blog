const sequelize = require("../db/client");
const { hash, compare } = require("bcrypt");
const { DataTypes, Model } = require("sequelize");
// const Blog = require('./Blog')
// const Comment = require('./Comment')

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: 6,
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: "user with email already exists",
      },
      validate: {
        isEmail: true,
      },
      allowNull: false,
    }
  },
  {
    sequelize,
    hooks: {
      async beforeCreate(user) {
        user.password = await hash(user.password, 10);
      },
    },
    modelName: "user",
    scopes: {
      withoutPassword: {
        attributes: { exclude: ["password"] },
      },
    },
  }
);


module.exports = User;



// const sequelize = require('../db/client')
// const { DataTypes, Model } = require('sequelize')
// const Comment = require('./Comment')
// const User = require('./User')


// class Blog extends Model {}

// Blog.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         blog_title: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         blog_text: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         blog_author: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         user_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'user',
//                 key: 'id',
//             },
//             allowNull: false
//         }
//     },
//     {
//         sequelize,
//         modelName: 'blog'
//     }
// );

// module.exports = Blog