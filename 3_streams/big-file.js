const fs = require('fs');

const file = fs.createWriteStream('./package');


for (let i = 0; i < 1e4; i++) {
    file.write('lorem ipsum doran seti grup verti sea calipso tex ortas');
}

file.end();