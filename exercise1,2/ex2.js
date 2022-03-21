const timeStamp = require('console-stamp');
let i = 10;

const countTen = function() {
    i == 0 ? console.log("Time is Up!") : console.log(i)
    i > 0 ? --i : clearInterval(t)
}
const t = setInterval(countTen, 1000);