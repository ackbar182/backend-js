//con event emiter es mas poderoso

const eventEmitter = require('events');


class Logger extends eventEmitter{
    execute(cb){
        console.log("before")
        this.emit("start");
        cb();
        this.emit("finish");
        console.log("after finish");
    }
}


const log = new Logger();
log.on(("start"),() =>{
    console.log("starting....");
})


log.execute(()=> {
    console.log("hello world");
})