//Activity 1

let PersonName = 'Tanu';

let age = 20;

console.log(`${PersonName}'s age is ${age}`);
console.log(`${PersonName}'s age is ${age}\nAnd she is Very Beautiful`);


//Activity 2

const num = [1, 2];
const [first, second] = num;
console.log(first);
console.log(second);


const book = {
    title: "A",
    author: "s"
}

const { title, author } = book;

console.log(title);
console.log(author);


//Activity 3

const array = [1,2,3,4,5];

const newarray = [...array , 6,7,8];

console.log(newarray);

function sum(a,b,c){
    return a+b+c;
}

const array2 = [4,4,4];

const addition = sum(...array2);

console.log(addition);


//Activity 4

function product(a,b=1){
    return a*b;
}


console.log(product(4,5));
console.log(product(7,));