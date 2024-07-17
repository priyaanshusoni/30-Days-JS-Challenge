//Activity 1

function evenOdd(number){
     if(number%2==0){
        console.log("Even Number");
     }
     else if(number%2 !=0 ){
        console.log("Odd Number");
     }
}

evenOdd(5);


function Square(number){
    let square =Math.pow(number,2);
    
    console.log(`Square of the given number is ${square}`);
}

Square(3);


//Activity 2

const maximum = function (number1 , number2){
       if(number1>=number2){
        return number1;
       }
       return number2;
}

console.log(maximum(5,10));



const add = function (str1 , str2){
    return str1+str2;
}

console.log('Hello','Guys');


//Activity 2 


const sum = (number1 , number2)=>{
      return  number1 + number2;
}

console.log(sum(4,5));


const contains = (str,char)=>{
    for(let i=0;i<str.length;i++){
        if(str[i]===char){
            return true;
        }
    }

    return false;
}

console.log(contains('Priyanshu','h'));



// const contains = (str, char) => str.includes(char);

// // Example usage:
// console.log(contains('Priyanshu', 'h')); //  true
// console.log(contains('Priyanshu', 'z')); // false


//Activity 4

function product(PARAM1 , PARAM2=1){
    return PARAM1 * PARAM2;
}

console.log(product(4,4));
console.log(product(4));


function greeting(name , age='18'){
   return `Hello ${name} you are ${age} old !`
}


console.log(greeting('Hitesh',30));


//Activity 5

function highorder(child , number){
      for(let i=1;i<=number;i++){
        child();
      }
}

const child = ()=>{
     console.log('I am a child function !');
}

highorder(child , 5);

function highorder2(child1 , child2 ,value){
       const temp= child1(value);
       child2(temp);

       
}

function child1(value){
        let a = Math.pow(value,3);
    return a;
}

function child2(temp){
    console.log(temp+5);
}


highorder2(child1,child2,2);