const fs = require('fs');

fs.mkdir("deathstar/ackbar",{recursive:true},(err) => {
    if (err) {
        console.log(err);
        return;
    }
    
});