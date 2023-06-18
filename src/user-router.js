const Router = require('../framework/Router')

const router = new Router()

const users = [
    {id: 1, name: 'user_1'},
    {id: 2, name: 'user_2'},
]

router.get('/users', (req, res)=> {
    res.send(users)
})

router.post('/users', (req, res)=> {
    res.send(users)
})

module.exports = router