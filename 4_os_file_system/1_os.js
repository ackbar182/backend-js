const os = require('os');


//cpus
/* console.log(`CPU Info: `,os.cpus()); */

//ip
/* console.log(`IP address: `,os.networkInterfaces()["Wi-Fi"].map(i => i.address)); */

//memory free
/* console.log(`Free memory`,os.freemem());

console.log("Type", os.type());
console.log("SO version", os.release()); */
console.log("Usr info",os.userInfo());

console.log(os.userInfo());