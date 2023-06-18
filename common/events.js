// const Emitter = require('events')

// const emitter = new Emitter()

// const callback = (data, second) => {
//     console.log('Вы прислали сообщение ' + data)
//     console.log('Второй аргумент ' + second)
// }

// emitter.on('message', callback)

// // emmiter.once() единожды сгенерировать
// // emitter.removeAllListeners()
// // emitter.removeListener('message', callback)

// const MESSAGE = process.env.message || ''

// if (MESSAGE) {
//     emitter.emit('message', MESSAGE, 111)
// } else {
//     emitter.emit('message', 'Вы не указали сообщение')
// }

// // Когда использовать?
// // http
// // websockets
// // long pulling
// // clusters