// Readable - чтение
// Writable - Запись
// Duplex - Для чтения и записи Readable + Writable
// Transform - Такой же как Duplex, но может изменить данные по мере чтения

// const fs = require('fs')
// const path = require('path')

// const pathTest = path.resolve(__dirname, 'test.txt')
// const pathTest2 = path.resolve(__dirname, 'test.txt')

// fs.readFile(pathTest, (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data)
// })

// const stream = fs.createReadStream(pathTest2)
//
// // Один чанк по дефолту 64кб
// stream.on('data', (chunk) => {
//     console.log(chunk)
// })
// stream.on('end', () => console.log('Закончили читать'))
// stream.on('open', () => console.log('Начали читать'))
// stream.on('error', (e) => console.log(e))

// const writableStream = fs.createWriteStream(pathTest2)
// for (let i = 0; i < 20; i++) {
//     writableStream.write(i + '\n');
// }
// writableStream.end()
// writableStream.close()
// writableStream.destroy()
// writableStream.on('error')

// const http = require('http');
//
// http.createServer((req, res) => {
//     //req - readable stream
//     //res - writable stream
//     const stream = fs.createReadStream(pathTest)
//
//     // Стрим закончит читать раньше чем пользователь скачает
//     stream.pipe(res)
// })