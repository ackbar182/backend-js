const fs = require('fs');



    const file = process.argv[2];

    const content = fs.readFile(file,(err,content) => {
        if (err) {
            return console.log(err);

        } 
        console.log(content);
        const line =  content.toString().split("\n").length;
        console.log(line);
    });

   

