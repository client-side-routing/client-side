'use strict';

var app = app || {};

(function(module) {
  const bookView = {};
  const singleBookView = {};

  bookView.initIndexPage = function() {
    $('.container').hide();
    $('.book-view').show();
    app.Book.fetchAll((books) => {
      books.forEach(book => $('#book-list').append(book.toHtml()));

    });
  };

  singleBookView.init = function() {
    $('.container').hide();
    $('.single-book-view').show();
    app.Book.fetchOne((books) => {
      books.forEach(book => $('#my-book').append(book.toHtml()));
    });
  };

  // createBook.init = function() {
  //   $('.container').hide();
  //   $('.single-book-view').show();

  // };

  module.bookView = bookView;
  module.singleBookView = singleBookView;
})(app);