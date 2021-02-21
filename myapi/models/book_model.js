const db = require('../database');
const book = {
  getbook: function(callback) {
    return db.query('select * from book order by id_book desc', callback);
  },
  getByid_book: function(id_book, callback) {
    return db.query('select * from book where id_book=?', [id_book], callback);
  },
  add: function(book, callback) {
    console.log(book);
    return db.query(
      'insert into book (name, author, isbn) values(?,?,?)',
      [book.name, book.author, book.isbn],
      callback
    );
  },
  delete: function(id_book, callback) {
    return db.query('delete from book where id_book=?', [id_book], callback);
  },
  update: function(id_book, book, callback) {
    return db.query(
      'update book set name=?,author=?, isbn=? where id_book=?',
      [book.name, book.author, book.isbn, id_book],
      callback
    );
  }
};
module.exports = book;