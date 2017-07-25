import bunyan from 'bunyan'

//log = bunyan.createLogger({name: 'TIR'})

log = bunyan.createLogger({
    name: 'TIR',
//    level: 'info',
    level: 'debug',
    streams: [{
        type: 'rotating-file',
        path: '/home/tibor/tir.log',
        period: '1d',
        count: 3
    }]
})

log.info('Program started.')
