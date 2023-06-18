// const os = require('os');
// const cluster = require('cluster');
// // const cluster = require('node:cluster');

// // console.log(os.platform())
// // console.log(os.arch())
// // console.log(os.cpus().length)

// if (cluster.isMaster) {
//     for (let i = 0; i < os.cpus().length - 2; i++) {
//         cluster.fork()
//     }

//     cluster.on('exit', (worker) => {
//         console.log(`Воркер c pid=${worker.process.pid} умер`)
//         if (code === ) {
//             cluster.fork()
//         } else {
//             console.log('Воркер умер')
//         }

//     })
// } else {
//     console.log(`Воркер (дочерний процесс) c pid=${process.pid} запущен`)

//     setInterval(()=> {
//         console.log(`Воркер c pid=${process.pid} ещё работает`)
//     }, 6000)
// }