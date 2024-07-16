// Acitivity 1 

for (let index = 1; index <=10; index++) {
   console.log(index);
    
}


///////////////////////////////////////
for (let index = 1; index <=10; index++) {
   console.log(5*index);
    
}


//Activity 2

let sum =0;
let i=1;

while(i<=10){
    sum+=i;
    i++;
}
console.log(sum);


let reverseNumbers = 10;

while(reverseNumbers>=1){
    console.log(reverseNumbers);
    reverseNumbers--;
}


//Activity 3;
let number =1;

do{
   
    console.log(number);
    number++;
}while(number<=5)


let Factorial =3;
let FactorialRes=1;

do{
    FactorialRes*=Factorial;
    Factorial--;
}while(Factorial>=1)

console.log(FactorialRes);

//Activity 4

for (let i = 1; i <=5; i++) {
    let row = "";
    for (let j = 1; j <=i; j++) {
        row+="*";
    
    }
   
    console.log(row);
    
    
}


//Activity 5

for (let index = 1; index <=10; index++) {
    if(index==5){
        continue;
    }
    console.log(index);
     
 }

for (let index = 1; index <=10; index++) {
    if(index==7){
        break;
    }
    console.log(index);
     
 }



