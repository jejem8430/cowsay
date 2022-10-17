const userinfo = require('./information.js');



const cowSay = require('./node_modules/cowsay');
console.log(cowSay.say({
    text: `${userinfo.name} ${userinfo.campus}`,
    e: "oO",
    T: "U "
}));




