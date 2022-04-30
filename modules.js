const { testName: userName, sayHi } = require('./test');
const os = require('os')
const name = 'Tommy';


console.log(sayHi(name));
console.log(os.platform(), os.release());

module.exports = name;