'use strict';

var app = app || {};

(function(module) {
  const bookView = {};
  const singleBookView = {};

  bookView.initIndexPage = function() {
    $('.container').hide();
    $('.book-view').show();
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));
  };

  singleBookView.init = function() {
    $('.container').hide();
    $('.single-book-view').show();
    module.Book.title.map(book => $('#my-book').append(book.toHtml()));
  };

  module.bookView = bookView;
  module.singleBookView = singleBookView;
})(app);

$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
});
$(function() {
  app.Book.fetchOne(app.singleView.initIndexPage);
});