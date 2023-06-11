const path = require('path')

console.log('кроссплатформенные пути склеить', path.join(__dirname, '..', '..'))
console.log('абсолютные пути', path.resolve('first', 'second'))
const fullpath = path.resolve( 'first', 'second.js')
console.log('Парсинг пути', path.parse(fullpath))

console.log('разделитель в ОС', path.sep)
console.log('Проверка на абсолютный путь', path.isAbsolute('first/second'))
console.log('Название файла', path.basename(fullpath))
console.log('расширение файла', path.extname(fullpath))

const websiteURL = 'http://localhost:8080/users?id=2829'
const url = new URL(websiteURL);
console.log(url)