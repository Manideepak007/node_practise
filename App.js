const os =  require('os');

//current user
const user = os.userInfo();

console.log(user);

//return system uptime

const time = os.uptime();

console.log(`System upTime : ${time} seconds`);

const currentOS = {
    name  : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
};

console.log(currentOS);

//Path Module

const path = require("path");

const hello = path.join("/folder", "hello.txt")

console.log(hello)

const base = path.basename(hello);

console.log(base)

const originalpath = path.resolve(__dirname, "folder", "hello.txt")

console.log(originalpath)

//fs -- filesystem module

//Synchronous approach

const { readFileSync, writeFileSync, readFile, writeFile } = require("fs")

const read = readFileSync("./folder/inner/inner.txt", "utf-8")

console.log(read)

writeFileSync("./folder/inner/inner1.txt", `bye bye ${read}`, {flag : `a`})

//Asynchronous approach(callback hell)


readFile("./folder/inner/inner.txt", "utf-8",(err, result)=>{
 if(err){
    console.log(err);
    return;
 }
 const read1 = result;
 readFile("./folder/inner/inner1.txt", "utf-8",(err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const write1 = result;
    writeFile("./folder/inner/inner2.txt", `hey heyy ${read1} & ${write1}`, (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
    })
 })
})