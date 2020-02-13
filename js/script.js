// Todoolean
// Creiamo una app che permette di inserire e cancellare dei todos
// in una lista utilizzando la API boolean per fare operazioni CRUD.






$(document).ready(function functionName() {
getCall();
$('.add-button').click(function() {
  var newTodo = $('.add-input').val();
  addTodo(newTodo);
});
$(document).on('click', '.delete', function() {
  var deleteThis = $(this);
  var idTodo = deleteThis.parent().attr('data-todo');

  deleteTodo(idTodo);
});

}); //FINE READY


//----------- FUNZIONI --------------

function printAll(array) {
  var source = $("#todo-template").html();
  var template = Handlebars.compile(source);
  for (var i = 0; i < array.length; i++) {
    var list = array[i];
    var context = {
      text: list.text,
      id: list.id
    }
    var html = template(context);
    $('.todo-ul').append(html);
  };
} // FINE PRINT ALL
//-------------------------------------

function getCall() {
  $.ajax({
    url: "http://157.230.17.132:3022/todos",
    method: "GET",
    success: function (data) {
      var todos = data;
      $('.todo-ul').html('');
      printAll(todos);
    },
    error: function (richiesta, stato, errori) {
      alert("E' avvenuto un errore. " + errore);
    }
  });
} // FINE GET ALL
//-------------------------------------

function addTodo(addInput) {
  $.ajax({
    url: "http://157.230.17.132:3022/todos",
    method: "POST",
    data: {
  text: addInput
},
    success: function (data) {
    $('.todo-ul').html('');
    getCall();
    },
    error: function (richiesta, stato, errori) {
      alert("E' avvenuto un errore. " + errore);
    }
  });
} // FINE ADD TODO
//-------------------------------------

function deleteTodo(id) {
  $.ajax({
    url: "http://157.230.17.132:3022/todos/" + id,
    method: "DELETE",
    success: function (data) {
      $('.todo-ul').html('');
      getCall();
    },
    error: function (richiesta, stato, errori) {
      alert("E' avvenuto un errore. " + errore);
    }
  });
} // FINE DELETE
//-------------------------------------
