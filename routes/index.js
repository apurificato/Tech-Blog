const router = require('express').Router()
const { User } = require('../models')
async function attachUser(req, res, next) {
    const user_id = req.session.user_id
    if (user_id) {
        const user = await User.findByPk(user_id, {
            attributes: ['id', 'username', 'password', 'email']
        })
        req.user = user.get({plain:true})
        return next()
    }
    next()
}
// async function attachBlog(req, res, next) {
//     const blog_id = req.session.blog_id
//     if (blog_id) {
//         const blog = await Blog.findByPk(blog_id, {
//             attributes: ['id', 'title', 'content', 'user_id']
//         })
//         req.blog = blog.get({plain:true})
//         return next()
//     }
//     next()
// }

const users = require('./user_routes')

router.use('/api/users', attachUser, users)

const blogs = require('./blog_routes')

router.use('/api/blogs', attachUser, blogs)

const views = require('./view_routes.js')

router.use('/',attachUser, views)

module.exports = router