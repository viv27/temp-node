const {readFileSync,writeFileSync} = require('fs')

console.log('start');
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

writeFileSync('./content/third.txt',
`here is the result ${first},${second}`)


console.log('Done with this task');
console.log('Staring next one');