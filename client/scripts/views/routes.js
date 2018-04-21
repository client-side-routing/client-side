
if (window.location.protocol.startsWith('https:')) {
  page.base('/client-side-routing');
}

page('/*', (ctx, next) => {
  $('.page').hide();
  next();
})

page('/', app.bookView.initIndexPage);
page('/book/:book_id', app.singleBookView.init);
//page('/book/new', app.createBook.init);

page.start();