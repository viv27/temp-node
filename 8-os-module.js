const os = require('os');

//info about current users

const user = os.userInfo();


// method returns systems uptime in seconds

console.log(user);
console.log(`the system unptime is: ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release :os.release(),
    totalMem :os.totalmem(),
    freeMemory : os.freemem(),
}

console.log(currentOS);