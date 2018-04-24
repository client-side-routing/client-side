'use strict';

var app = app || {};

const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'https://git.heroku.com/ml-ac-single-page.git';
ENV.developmentApiUrl = 'http://localhost:3000';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;

(function(module) {
 function errorCallback(err) {
   console.error(err);
   module.errorView.initErrorPage(err);
 }

 function Book(rawBookObj) {
   Object.keys(rawBookObj).forEach(key => this[key] = rawBookObj[key]);
 }

 Book.prototype.toHtml = function() {
   let template = Handlebars.compile($('#book-list-template').text());
   return template(this);
 };

 Book.all = [];
 Book.loadAll = rows => Book.all = rows.sort((a, b) => b.title - a.title).map(book => new Book(book));
 Book.loadOne = rows => Book.title;

 Book.fetchAll = (callback) =>
   $.get(`${ENV.apiUrl}/api/v1/books`)
     .then(Book.loadAll)
     .then(callback)
     .catch(errorCallback);

 // Book.fetchOne = (id) => {
 //   return $.getJSON(ENV.apiUrl + '/api/v1/books/' + id)
 //     .catch(err => console.error(err));
 // };

 Book.fetchOne = callback => {
  $.get(`${ENV.apiUrl}/api/v1/books/${callback}`)
    .then(app.oneBook.render)
    .then(callback)
    .catch(errorCallback);
};  

//  Book.fetchOne = (book_id) => {
//   //console.log('fetchone');
//   return $.getJSON(ENV.apiUrl + '/api/v1/books/:book_id')
//   .catch(err => console.error(err));
//   //  $.get(`${ENV.apiUrl}/api/v1/books/:book_id`)
//   //    .then(results => ctx.book = results[0])
//   //    .then(callback)
//   //    .catch(errorCallback);
//  };



 module.Book = Book;
})(app);
//${ctx.params.book_id}