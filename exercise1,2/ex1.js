const timeStamp = require('console-stamp');
console.log("logger started");
let loger = function() {
    console.log("log delayed");
}
const del = setTimeout(loger, 5000);