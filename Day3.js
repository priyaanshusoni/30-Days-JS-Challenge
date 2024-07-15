/* Activity 1 */


let n = -4;

if(n>0){console.log('Positive Number');
}
else if(n<0){console.log('Negative Number');}
else{console.log('Zero');}


const age = 21;

if(age>=18){console.log('You are eligible to vote');}
else if(age<=18){console.log('You are not eligible to vote');}


// Activity 2

const a = 4;
const b = 21;
const c = 30;

if (a > b) {
  if (a > c) {
    console.log(a, "is the largest");
  } else {
    console.log(c, "is the largest");
  }
} else {
  if (b > c) {
    console.log(b, "is the largest");
  } else {
    console.log(c, "is the largest");
  }
}


// Activity 3

const number =3;

switch (number) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;

   
}
const score =75;

switch (true) {
    case score<=100 && score>80 : 
        console.log("You got grade A");
        break;
      case 80 >= score && score > 60:
        console.log("You got grade B");
        break;
      case 60 >= score && score > 40:
        console.log("You got grade C");
        break;
      case 40 >= score && score > 20:
        console.log("You got grade D");
        break;
      case 20 >= score && score >= 0:
        console.log("You got grade F");
        break;
    
      default:
        console.log("enter a valid score");

   
}


// Activity 4


const check = 45;

check%2==0 ? console.log('Evem Number') : console.log('Odd Number');




// Activity 5

const year = 2000;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(`${year} is a leap year`);
    } else {
      console.log(`${year} is a normal year`);
    }
  } else {
    console.log(`${year} is a leap year`);
  }
} else {
  console.log(`${year} is a normal year`);
}



