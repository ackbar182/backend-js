const fs = require('fs');


fs.copyFile("lorem.html","copy.txt",err => {
    if (err) {
        console.log(err);
        return;
    }
})