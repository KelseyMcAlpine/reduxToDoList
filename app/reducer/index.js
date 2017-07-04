/* jshint esversion: 6 */
import uuidv4 from 'uuid/v4';

module.exports = (state, action) => {
  switch(action.type){
    case 'ADD_TODO':
      var newTodos = [
        ...state.todos,
        {
          text: action.text,
          id: uuidv4()
        }
      ];
      return {
        todos: newTodos
      };

    case 'DELETE_TODO':
      var updatedTodos = state.todos.filter((todo) => {
        if ( todo.id == action.id ){
          return false;
        } else {
          return true;
        }
      });
      return {
        todos: updatedTodos
      };

    default:
      return state;
  }
};
