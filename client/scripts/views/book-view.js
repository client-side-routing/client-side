'use strict';

var app = app || {};

(function(module) {
  const bookView = {};

  bookView.initIndexPage = function() {
    $('.container').hide();
    $('.book-view').show();
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));
  }

  module.bookView = bookView;
})(app);

$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
});

  singleBookView.init = function() {
    $('.container').hide();
    $('.single-book-view').show();
    module.Book.title.map(book => $('#my-book').append(book.toHtml()));
  }



  module.singleBookView = singleBookView;
})(app);

$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
});