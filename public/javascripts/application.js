// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function() {
  var initial_wage = parseFloat($(".display").text());
  var accumulated = parseFloat($(".display").text());;
  setInterval(function(){
    accumulated += initial_wage;
    $(".display").text("$" + accumulated.toPrecision(4));
    }, 1000);
})
