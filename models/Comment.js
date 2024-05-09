const sequelize = require('../db/client')
const { DataTypes, Model } = require('sequelize')
const User = require('./User')
const Blog = require('./Blog')

class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            },
            allowNull: false
        },
        blog_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'blogs',
                key: 'id',
            },
            allowNull: false
        },
        comment_author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'comment'
    }
);

module.exports = Comment