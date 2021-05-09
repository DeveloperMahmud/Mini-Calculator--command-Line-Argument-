//Mini Calcualtor
//Functionality : ADD / SUB / MUL / DIV
//Take input data from command line

const add = require('./calculator/add');
const sub = require('./calculator/sub');
const mul = require('./calculator/mul');
const div = require('./calculator/div');

const a = parseInt(process.argv[2]);
const choice = process.argv[3];
const b = parseInt(process.argv[4]);

if (choice === 'ADD'){
    console.log(add(a,b));
}else if(choice === 'SUB'){
    console.log(sub(a,b));
}else if(choice === 'MUL'){
    console.log(mul(a,b));
}else if(choice === 'DIV'){
    console.log(div(a,b));
}else{
    console.log('Invalid Your Choice!');
}