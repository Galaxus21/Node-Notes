const path = require('path');

module.exports = path.dirname(require.main.filename);

/* 
this function will return the root directory of the main file 
which is responsible for starting the execution of the process (app.js).
*/