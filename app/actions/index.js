/*jshint esversion: 6*/

exports.addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text: text
  };
};

exports.deleteTodo = (id) => {
  console.log("in delete todo - actions index.js");
  console.log("id: " + id);
  return {
    type: 'DELETE_TODO',
    id: id
  };
};
