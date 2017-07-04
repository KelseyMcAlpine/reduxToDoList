/*jshint esversion: 6 */

import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from '../actions';

var TodoItem = connect()(React.createClass({
  deleteSelf() {
    console.log("In delete Self - main.js");
    this.props.dispatch(deleteTodo(this.props.id));
  },

  render() {
    return (
      <TouchableOpacity onPress={this.deleteSelf}>
        <View style={styles.todoContainer}>
          <Text style={styles.todoText}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}));

var Main = React.createClass({
  getInitialState(){
    return {
      newTodoText: ""
    }
  },

  addNewTodo(){
    var {newTodoText} = this.state;
    if (newTodoText && newTodoText != ""){
      this.setState({
        newTodoText: ""
      });
      this.props.dispatch(addTodo(newTodoText));
    }
  },

  render() {

    var renderTodos = () => {
      return this.props.todos.map((todo) => {
        return (
          <TodoItem text={todo.text} key={todo.id}/>
        )
      });
    };

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.topBar}>
          <Text style={styles.title}>Todo List!</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            onChange = {(event) => {
              this.setState({
                newTodoText: event.nativeEvent.text
              })
            }}
            value={this.state.newTodoText}
            returnKeyType="done"
            placeholder="New To-do"
            style={styles.input}
            onSubmitEditing={this.addNewTodo}/>
        </View>
        <ScrollView automaticallyAdjustContentInsets={false}>
          {renderTodos()}
        </ScrollView>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },

  topBar: {
    padding: 16,
    paddingTop: 28,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71',
  },

  title: {
    color: 'white',
    fontSize: 20,
  },

  inputContainer: {
    padding: 8,
    paddingTop: 0,
    backgroundColor: '#2ecc71',
  },

  input: {
    height: 26,
    padding: 4,
    paddingLeft: 8,
    borderRadius: 8,
    backgroundColor: 'white',
  },

  todoContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: -1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  todoText: {

  },

});

var mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

module.exports = connect(mapStateToProps)(Main);
