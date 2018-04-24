'use strict';

var app = app || {};

(function(module) {
 const bookView = {};
 const singleBookView = {};
//  const createBook ={};

 bookView.initIndexPage = () => {
   $('.container').empty().hide();
   $('.book-view').show();

  module.Book.all.map(book => $('#book-list').append(book.toHtml()));
 };
 

 module.bookView = bookView;
//  module.singleBookView = singleBookView;
})(app);

$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
});

   
//    app.Book.fetchAll((books) => {
//      books.forEach(book => $('#book-list').append(book.toHtml()));

//    });
//  };

//  singleBookView.init = () => {
//   //console.log('single book');
//    $('.container').hide();
//    $('.single-book-view').show();
//    app.Book.fetchOne((books) => {
//      books.forEach(book => $('#my-book').append(book.toHtml()));
//    });
//  };

 // createBook.init = () => {
 //  $('#form').off().on('submit', 'form', (event) => {
 //    event.preventDefault()
 //    const newBook = $('#title').val()
 //    app.Book.create({ title }).then(page('/'))
 //    $('#title').val('')
 // };
