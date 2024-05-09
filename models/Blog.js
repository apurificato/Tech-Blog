const sequelize = require('../db/client')
const { DataTypes, Model } = require('sequelize')
const Comment = require('./Comment')
const User = require('./User')


class Blog extends Model {}

Blog.init(
    {
        blog_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        blog_text: {
            type: DataTypes.JSON,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'blog'
    }
);

module.exports = Blog