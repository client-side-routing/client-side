'use strict';

var app = app || {};

(function(module) {
  const bookView = {};
  const singleBookView = {};
  const createBook ={};

  bookView.initIndexPage = () => {
    $('.container').hide();
    $('.book-view').show();
    app.Book.fetchAll((books) => {
      books.forEach(book => $('#book-list').append(book.toHtml()));

    });
  };

  singleBookView.init = () => {
    $('.container').hide();
    $('.single-book-view').show();
    app.Book.fetchOne((books) => {
      books.forEach(book => $('#my-book').append(book.toHtml()));
    });
  };

  // createBook.init = () => {
  //  $('#form').off().on('submit', 'form', (event) => {
  //    event.preventDefault()
  //    const newBook = $('#title').val()
  //    app.Book.create({ title }).then(page('/'))
  //    $('#title').val('')
  // };

  module.bookView = bookView;
  module.singleBookView = singleBookView;
})(app);



