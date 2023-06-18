const Router = require('../framework/Router')

const router = new Router()

const users = [
    {id: 1, name: 'user_1'},
    {id: 2, name: 'user_2'},
]

router.get('/users', (req, res)=> {
    res.writeHead(200, {
        'Content-type': 'application/json'
    })
    res.end(JSON.stringify(users))
})

router.post('/users', (req, res)=> {
    res.writeHead(200, {
        'Content-type': 'application/json'
    })
    res.end(JSON.stringify(users))
})

module.exports = router