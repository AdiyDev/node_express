const Router = require('./framework/Router')
const Application = require('./framework/Application')

const PORT = process.env.PORT || 5000

const app = new Application()
const router = new Router()

router.get('/users', (req, res) => {
    res.end('yout send request to /users')
})

router.get('/posts', (req, res) => {
    res.end('yout send request to /posts')
})

app.addRouter(router)

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))




