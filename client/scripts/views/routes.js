if (window.location.protocol.startsWith('https:')) {
  page.base('/client-side-routing');
}

// all route changes should hide page containers
page('/*', (ctx, next) => {
  $('.page').hide();
  next();
})

page('/', app.bookView.init);
page('/single', app.singleBookView.init);
page('/edit/:id', (ctx) => app.Book.fetchOne(ctx.params.id).then(app.editPage.init));

page.start();