const util = require('util');

const helloPluto = util.deprecate(() => {
    console.log("hello");
},'pluto is deprecated');


helloPluto();