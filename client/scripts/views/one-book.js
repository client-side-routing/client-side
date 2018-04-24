var app = app || {};

(function(module) {
  const oneBook = {};
  const template = Handlebars.compile($('#detail-template').text());
    $('.single-book-view').append(template);

  oneBook.initPage = function() {
    $('.detail-view').show();
    // $('.container').hide();
   
    // $('#my-book').off().on('click','button', ()=> {
    //   page('/my-book')
    // })
    
  };
  oneBook.render = (books) => $('.detail-view').append($(template(books[0])));

  module.oneBook = oneBook;
})(app);
