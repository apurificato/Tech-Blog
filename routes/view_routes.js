const router = require('express').Router()

const { User } = require('../models')

function isAuth(req, res, next) {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    return next()
}


router.get('/', async (req, res) => {

    let userObj = {
        isLoggedIn: req.user ? true : false,
        user: req.user
    }

    res.render('home', userObj)
})

router.get('/about', async (req, res) => {
    let userObj = {
        isLoggedIn: req.user ? true : false,
        user: req.user
    }

    res.render('about', userObj)
})

router.get('/blog', isAuth, async (req, res) => {
    let userObj = {
        isLoggedIn: true,
        user: req.user
    }
    res.render('blog', userObj)

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
    const user = await User.findByPk(req.user.id)
    const bets = await user.getUserBets(6)

    userObj.bets = bets
    res.render('user', userObj)
})

router.get('/post-blog', isAuth, async (req, res) => {
    let userObj = {
        isLoggedIn: true,
        user: req.user
    }
    const post = await Event.create({
        event_name: "postBlog",
    })

    userObj.post = {
        user_id: req.user.id,
        username: req.user.username,
        event_id: post.id,
        event_name: post.event_name,
    }
    res.render('post-blog', userObj)

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
router.get('/*', async (req, res) => {
    let userObj = {
        isLoggedIn: req.user ? true : false,
        user: req.user
    }

        res.render('home', userObj)
    

})


module.exports = router