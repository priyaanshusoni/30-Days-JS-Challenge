//Activity 1
const btn1 = document.querySelector('button');
const imgg = document.querySelector('img');
const para = document.querySelector('p');
function textchange(){
    para.textContent= 'Im Changed !';
}
btn1.addEventListener('click',textchange);
imgg.addEventListener('dblclick',()=>{
    imgg.src=""
    
});



//Activity 2
btn1.addEventListener('mouseover',()=>{
    btn1.style.backgroundColor='red';
})
btn1.addEventListener('mouseout',()=>{
    btn1.style='none';
})


//Activity 3
const body = document.querySelector('body');
const inputele = document.querySelector('input');
const op = document.querySelector('#output');
inputele.addEventListener('keydown',(e)=>{
    console.log(e.key);
    op.textContent=`You pressed '${e.key}'`;
    
});


inputele.addEventListener('keyup',(e)=>{
    console.log(e.key);
    op.textContent=`You pressed '${e.key}'`;
    
});


//Activity 4

inputele.addEventListener('focus',(e)=>{
    console.log(e);
})