// const router = require('express').Router()


// const {User,Event,Blog} = require('../models')

// async function handleError(err, res) {
//     console.log(err)
//     return res.json({
//         message: 'Bad Request',
//         error: err
//     })
// }

// router.get('/', async (req, res) => {
//     try {
//         const blogs = await Event.findAll()
//         return res.json(blogs)

//     }
//     catch (err) {
//         handleError(err,res)
//     }
// })

// router.get('/:id', async (req, res) => {
//     try {
//         let id = req.params.id
//         const blog = await Blog.findByPk(id,
//             {

//             })
//         return res.json(blog)

//     }
//     catch (err) {
//         handleError(err,res)
//     }
// })

// router.post('/', async (req, res) => {
//     try {
//         let newPost = req.body

//         const blog = await Blog.create(newPost)
//         return res.json(blog)

//     } catch (err) {
//         handleError(err,res)
//     }
// })

// router.put('/:id', async (req, res) => {
//     try {
//         let update = req.body
//         let id = req.params.id
//         const blog = await Blog.findByPk(id,
//             {

//             })
//         blog.update(update)
//         blog.posts.map(async (postObj) => {
//             const post = await Post.findByPk(betObj.id)
//             const result = update.outcome
//             await post.update({result})
//             if(!post.resolved){
//                 const user = await User.scope('withoutPassword').findByPk(postObj.user_id)
//                 await user.update({blogs: newBlogs})

//                 await post.update({resolved: true})

//             }
            
//         })
//         return res.json(event)

//     } catch (err) {
//         handleError(err,res)
//     }
// })