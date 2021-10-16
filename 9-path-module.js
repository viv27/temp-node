const path = require('path');

console.log(path.sep);


const filepath = path.join('/content','subfolder','text.txt')
console.log(filepath);

console.log(path.basename(filepath));

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);