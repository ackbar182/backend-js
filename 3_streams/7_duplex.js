const { Duplex } = require('stream');




//chunk viene como tipo buffer por eso se usa el toString()

const duplexStream = new Duplex({
    write(chunk,encoding,callback) {
        console.log(chunk.toString());
        callback();
    },

    read(size) {
        if (this.currentCharCode > 90) {
            this.push(null);
            return;
        }
        setTimeout(() => {
            this.push(String.fromCharCode(this.currentCharCode++));
        }, 100);

    }
});


duplexStream.currentCharCode = 65;
process.stdin.pipe(duplexStream).pipe(process.stdout);