//Activity 1

const book={
    title :'My Book' ,
    author : 'Mr. Manmohan Singh',
    year : '2022',  
    

    
}

console.log(book);

console.log(book.title);

console.log(book.author);

book.greeting=()=>{
     console.log(`Hello ${book.title} and ${book.author}`);
}

console.log(book);

book.greeting();

book.update=(year2) => {
   book.year = year2;  
}

console.log(book);

book.update('2023');

console.log(book);

//Activity 3

const library ={
    name: 'PCE library',
    books:[
        {
            title: 'book1',
            year : '2012'
        },
        {
            title: 'book2',
            year : '2016'
        }
    ]
}

console.log(library);
console.log(library.name);
console.log(library.books[0].title);
console.log(library.books[1].title);


//Activity 4

const book2 = {
    title: 'My Book',
    author: 'Mr. Manmohan Singh',
    year: '2022',
    // Define a method using 'this' keyword to return a string with title and author
    getTitleAndAuthor() {
        return `Title: ${this.title}, Author: ${this.author}`;
    }
}

// Log the entire book object
console.log(book2);

// Log the result of calling the getTitleAndAuthor method
console.log(book2.getTitleAndAuthor());

//Activity 5
console.log('5');
  for (const key in book) {
     
        console.log(`${key}: ${book[key]}`);
        
    }


    console.log(Object.keys(book));
    console.log(Object.values(book));