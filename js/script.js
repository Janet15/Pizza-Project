$(document).ready(function () {
    $("form#buy-items").submit(function(event){
        event.preventDefault()
var pizzaSize=$(".pizza-size").val();
var crustType=$(".crust-type").val();
var toppings=$(".toppings").val();

var newPizza=new Pizza(pizzaSize, crustType,toppings)

console.log(newPizza.totalprice())

});

$('#itemList').append("<p> Pizza </p>");