/* console.log("Un %s y un %s ","perrito","gatito");


console.warn("hello warn");


console.assert(42 == "42");
console.assert(42 === "42");


console.trace("hello");*/

const util = require('util'); 


const debuglog = util.debuglog("foo");

debuglog("hello from foo")