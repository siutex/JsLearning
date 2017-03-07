var obj = new Object()
var obj = {};
obj = {
name: {
first: 'Gandalf',
last: 'the Grey'
},
address: 'Middle Earth'
};

function Book(title, pages, isbn){
this.title = title;
this.pages = pages;
this.isbn = isbn;
}

var book = new Book('title', 'pag', 'isbn');

Book.prototype.printTitle = function(){
console.log(this.title);
};
book.printTitle();
//function inside class
function Book(title, pages, isbn){
this.title = title;
this.pages = pages;
this.isbn = isbn;
this.printIsbn = function(){
console.log(this.isbn);
}
}
var book = new Book('title', 'pag', 'isbn');
book.printIsbn()
