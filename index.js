const PORT = process.env.PORT || 5000
const Application = require('./framework/Application')
const userRouter = require('./src/user-router')
const jsonParser = require('./framework/parseJSON')
const urlParser = require('./framework/parseURL')


const app = new Application()

app.use(jsonParser)
app.use(urlParser('http://localhost:5000'))

app.addRouter(userRouter)

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))




