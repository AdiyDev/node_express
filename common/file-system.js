// const fs = require('fs')
// const path = require('path')

// const fsPromise = require('fs/promises')
// fsPromise.mkdir('/').then().catch()

//create

// console.log(fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2'), {recursive: true})) sync
// fs.mkdir(path.resolve(__dirname, 'dir'), (err)=> { async
//     if (err) {
//         console.log(err)
//         return
//     }

//     console.log('Folder create')
// })

//delete

// fs.rmdir(path.resolve(__dirname, 'dir'), (err)=> { 
//     if (err) {
//        throw err
//     }
// })

// write

//callback hell
// fs.writeFile(path.resolve(__dirname, 'test.txt'), 'write buffer test', (err)=> {
//     if (err) {
//         throw err
//     }
//     console.log('file записан')

//     fs.appendFile(path.resolve(__dirname, 'test.txt'), ' append in test file new text', (err)=> {
//         if (err) {
//             throw err
//         }
//         console.log('file обновлен')
//     })
// })


// const writeFileAsync = async (path, data) => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(path, data, (err) => {
//                 if (err) {
//                     return reject(err) 
//                 }

//                 resolve()
//         })
//     })
// }

// const readFileAsync = async (path) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
//                 if (err) {
//                     return reject(err) 
//                 }
//                 resolve(data)
//         })
//     })
// }


// const appendFileAsync = async (path, data) => {
//     return new Promise((resolve, reject) => {
//         fs.appendFile(path, data, (err) => {
//                 if (err) {
//                     return reject(err) 
//                 }
//                 resolve()
//         })
//     })
// }


// const removeFileAsync = async (path) => {
//     return new Promise((resolve, reject) => {
//         fs.rm(path, (err) => {
//                 if (err) {
//                     return reject(err) 
//                 }
//                 resolve()
//         })
//     })
// }


// const pathExample = path.resolve(__dirname, 'artifacts.txt')
// const pathNewTest = path.resolve(__dirname, 'DOCs-count.txt')

// writeFileAsync(pathExample, 'write buffer text\n')
//     .then(() => appendFileAsync(pathExample, '1 append text\n'))
//     .then(() => appendFileAsync(pathExample, '2 append text\n'))
//     .then(() => appendFileAsync(pathExample, '3 append text\n'))
//     .then(() => readFileAsync(pathExample))
//     .then((data) => console.log(data))
//     .catch(()=> console.log('err writed file'))

// removeFileAsync(pathExample)
//     .then(() => console.log('file was removed'))
//     .catch(()=> console.log('err writed file'))

// const textEnvExample = process.env.TEXT || ''

// writeFileAsync(pathExample, textEnvExample)
//     .then(() => readFileAsync(pathExample))
//     .then((data) => data.split('').length)
//     .then((count)=> writeFileAsync(pathNewTest, `длина артефакта ${count}`))
//     .then(()=> removeFileAsync(pathExample))
//     .catch(() => console.log('some occurred error'))