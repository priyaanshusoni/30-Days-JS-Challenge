
//Activity 1
const headingchange = document.getElementById('heading')
.innerText = "Changed!"

const color = document.querySelector('.body');

color.style.backgroundColor = 'green';





//Activity 2

 const bodyele = document.querySelector('body')
 var divele = document.createElement('div');

 divele.textContent='Div Created !'

 bodyele.appendChild(divele);



const listele = document.querySelector('li')

const newli = document.createElement('ul');
newli.textContent='created ul element';

listele.appendChild(newli);


//Activity 3

const rem = document.querySelector('#heading');
rem.remove();


const last =document.querySelector('ul');

last.removeChild(last.lastChild)


//Activity 4

const imgele = document.querySelector('img');

imgele.src='https://media.istockphoto.com/id/618346576/photo/serpentine-mountain-trail-in-gorges-dades-in-high-atlas-morocco.webp?s=170667a&w=0&k=20&c=8agPSrM0BCYon4mdIyr3CpDulRtEZaSJs22Qr_8XDMg='

imgele.classList.add('imageofroads');
imgele.classList.remove('imageofroads');

console.log(imgele);

//Activity 5

const buttonele = document.querySelector('button')

buttonele.addEventListener('click', ()=>{
   const rem=  document.querySelector('p')
   rem.remove();
});



buttonele.addEventListener('mouseover',()=>{
    buttonele.style.borderColor='red';
});


