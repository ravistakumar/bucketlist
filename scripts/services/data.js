'use strict';

angular.module('todoListApp')
.service('dataService', function($http) {
  this.helloWorld = function() {
    console.log("This is the data service's method!!");
  };
  
  this.getTodos = function(callback){
    $http.get('JsonData/todos.json')
    .then(callback)
  };
  
  this.deleteTodo = function(todo) {
    console.log("The " + todo.name + " todo has been deleted!")
    // other logic
  };
  
  this.saveTodos = function(todos) {
    console.log(todos.length + " todos have been saved!");
    // other logic...
  };
  
});