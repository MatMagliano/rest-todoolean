// Todoolean
// Creiamo una app che permette di inserire e cancellare dei todos
// in una lista utilizzando la API boolean per fare operazioni CRUD.






$(document).ready(function functionName() {
  console.log('ciao');

getCall();

}); //FINE READY


//----------- FUNZIONI --------------


function getCall() {
  $.ajax(
{
url: "http://157.230.17.132:3022/todos",
method: "GET",
success: function (data) {
  var todos = data;
  console.log(todos);
  printAll(todos);

},
error: function (richiesta, stato, errori) {
alert("E' avvenuto un errore. " + errore);
}
}
);
} // FINE GET ALL
//-------------------------------------
function printAll(array) {
  var source = $("#todo-template").html();
  var template = Handlebars.compile(source);
  for (var i = 0; i < array.length; i++) {
    var list = array[i];
    var context = {
      text: list.text,
      id: list.text
  }
  var html = template(context);
  $('.todo-ul').append(html);
  };
} // FINE PRINT ALL
