//Activity 1

const nums=[1,2,3,4,5];

console.log(nums);


console.log(nums[0]);
console.log(nums[4]);


//Activity 2

nums.push(6);

console.log(nums);

nums.pop();

console.log(nums);

nums.shift();

console.log(nums);



nums.unshift(0);

console.log(nums);


//Activity 3
 const map1 = nums.map((x)=> x*2);

 console.log(map1);

 const filter1 = nums.filter((x) => x%2 ==0)
console.log(filter1);

let sum =0;
const reduce1=  nums.reduce((acc,curr) =>
 acc+curr , sum,
  
);

console.log(reduce1);

//Activity 4

const nums1= [1,2,3,4,5,6,7,8,9]

for (let index = 0; index < nums1.length; index++) {
    const element = nums1[index];
    console.log(element);
    
}


nums1.forEach((item,index) => {
    console.log(`${index} : ${item}`);
});


//Activity 5

const matrix = [
    [1,2,3],
    [4,5,6]
];

console.log(matrix);

console.log(matrix[1][2]);






