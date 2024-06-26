const router = require('express').Router();
const { Blog, User } = require('../models');

async function handleError(err, res) {
    console.log(err);
    return res.redirect('/');
}

router.post('/', async (req, res) => {
    try {
        let newBlog = req.body;
        // User ID stored in the session
        const userId = req.session.user_id;
        newBlog.userId = userId;
        const blog = await Blog.create(newBlog);
        // Send JSON response with the created blog post
        res.status(201).json(blog);
        // return res.redirect('/');
    } catch (err) {
        // Handle errors
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Get all blog posts and render them on home page
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.findAll(
            { 
                include: {
                    model: User,
                    attributes: {
                        exclude: ['password']
                    }
                } 
            }
        );
        return res.json(blogs)
    } catch (err) {
        handleError(err, res);
    }
});


// Get blog post by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await Blog.findByPk(id, { include: User });
        return res.json(blog);
    } catch (err) {
        handleError(err, res);
    }
});

// Update a blog post
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        const blog = await Blog.findByPk(id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog post not found' });
        }
        blog.title = title;
        blog.content = content;
        await blog.save();
        return res.json(blog);
    } catch (err) {
        handleError(err, res);
    }
});

// Delete a blog post
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await Blog.findByPk(id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog post not found' });
        }
        await blog.destroy();
        return res.json({ message: 'Blog post deleted successfully' });
    } catch (err) {
        handleError(err, res);
    }
});

module.exports = router;
