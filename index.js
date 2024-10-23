const http = require('http')
const fs = require('fs')
const readline = require('readline')
const { stdin, stdout } = require('process')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
let num1;
let num2;
 rl.question('Enter the first number: ',(numx)=>{
    num1 = Number(numx);
    rl.question('Enter the second number: ',(numy)=>{
        num2 = Number(numy);
        if(num1 > num2){
            console.log(`the maximum of two number is: ${num1}`)
        }else if(num1 < num2){
            console.log(`the maximum of two number is: ${num2}`)
        } else{
            console.log('Invalid Number')
        }
        rl.close();
    })
 })



