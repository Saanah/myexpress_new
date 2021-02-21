const db = require('../database');
const course = {
  getcourse: function(callback) {
    return db.query('select * from course order by id_course desc', callback);
  },
  getByid_course: function(id_course, callback) {
    return db.query('select * from courdr where id_course=$1', [id_course], callback);
  },
  add: function(course, callback) {
    console.log(course);
    return db.query(
      'insert into course (name, credits) values($1,$2)',
      [course.name, course.credits],
      callback
    );
  },
  delete: function(id_course, callback) {
    return db.query('delete from course where id_course=$1', [id_course], callback);
  },
  update: function(id_course, course, callback) {
    return db.query(
      'update course set name=$1,credits=$2 where id_course=$3',
      [course.name, course.credits, id_course],
      callback
    );
  }
};
module.exports = course;