
'use strict';

page('/books/*', (ctx, next) => {
  $('.book-view').empty().hide();
  $('.book-create').hide();
  next();
});

page('/', app.bookView.initIndexPage);
page('/books/:id', ctx => app.Book.fetchOne(ctx.params.id));

page.start();



// if (window.location.protocol.startsWith('https:')) {
//   page.base('/client-side-routing');
// }

// page('/*', (ctx, next) => {
//   $('.page').hide();
//   next();
//  })
 
//  page('/', app.bookView.initIndexPage);
//  page('/books/:book_id', app.singleBookView.init);
//  page('/', (ctx) => {
//   app.Book.fetchOne(ctx.params.id)
//     .then(app.oneBook.initIndexPage)
// });





//  //page('/book/new', app.createBook.init);
 
//  page.start();
