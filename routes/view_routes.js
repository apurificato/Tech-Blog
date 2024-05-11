const router = require('express').Router()

const { User, Blog } = require('../models')

function isAuth(req, res, next) {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    return next()
}


router.get('/', async (req, res) => {
    let data = {
        isLoggedIn: req.user ? true : false,
        user: req.user,
        blog: req.blog
    };
    res.render('home', data);
});


router.get('/about', async (req, res) => {
    let userObj = {
        isLoggedIn: req.user ? true : false,
        user: req.user
    }
    res.render('about', userObj)
})

router.get('/register', async (req, res) => {
    let userObj = {
        isLoggedIn: req.user ? true : false,
        user: req.user
    }

    res.render('register', userObj)
})

router.get('/login', async (req, res) => {
    let userObj = {
        isLoggedIn: req.user ? true : false,
        user: req.user
    }
    res.render('login', userObj)
})

router.get('/logout', async (req, res) => {
    let userObj = {
        isLoggedIn: req.user ? true : false,
        user: req.user
    }

    res.render('logout', userObj)
})

router.get('/user', isAuth, async (req, res) => {
    let userObj = {
        isLoggedIn: true,
        user: req.user
    }
    res.render('user', userObj)
})


router.get('/updateuser', isAuth, async (req, res) => {
    let userObj = {
        isLoggedIn: req.user ? true : false,
        user: req.user
    }

    res.render('updateuser', userObj)
})
router.get('/deleteuser', isAuth, async (req, res) => {
    let userObj = {
        isLoggedIn: req.user ? true : false,
        user: req.user
    }
        res.render('deleteuser', userObj)
})

router.get('/blog', async (req, res) => {
    try {
        // Fetch all blog posts
        const blogs = await Blog.findAll();
        // Render a view or send JSON response with the blog posts
        res.render('blog', { blogs });
    } catch (err) {
        // Handle errors
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/*', async (req, res) => {
    let userObj = {
        isLoggedIn: req.user ? true : false,
        user: req.user
    }
        res.render('home', userObj)
})


module.exports = router