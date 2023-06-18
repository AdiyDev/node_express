const PORT = process.env.PORT || 5000
const Application = require('./framework/Application')
const userRouter = require('./src/user-router')
const jsonParser = require('./framework/parseJSON')
const urlParser = require('./framework/parseURL')
const mongoose = require('mongoose');

const app = new Application()

app.use(jsonParser)
app.use(urlParser('http://localhost:5000'))

app.addRouter(userRouter)

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))

const start = async () => {
    try {
        await mongoose.connect('cluster_mongodb://username:password@host:port/database?options...')
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
    } catch (err) {
        console.log(err)
    }
}

start()


