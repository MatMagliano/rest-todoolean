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
  var todo = data;
  console.log(todo);
},
error: function (richiesta, stato, errori) {
alert("E' avvenuto un errore. " + errore);
}
}
);
}
