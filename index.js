const http = require('http')
const fs = require('fs')
const readline = require('readline')
const { stdin, stdout } = require('process')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
 rl.question('Enter two number seprated by space: ',(input)=>{
    const numbers = input.split(' ').map(Number);
    if(numbers.length === 2 && !isNaN(numbers[0]) && !isNaN(numbers[1])){
        const max = Math.max(numbers[0],numbers[1])
        console.log(`The maximum of two numbers is: ${max}`)
    }else{
        console.log('Invalid Numbers, please enter a valid two number')
    }
        rl.close();
 })



