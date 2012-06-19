// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function UpdateCounter(initial_wage, accumulated)
{
  return accumulated + initial_wage;
}

$(document).ready(function() {
  var initial_wage = parseFloat($("div#display_counter p:last").text());
  var accumulated = 0;
  setInterval(function(){
    accumulated = parseFloat($("div#display_counter p:last").text());
    $("div#display_counter p:last"); 
    $("div#display_counter p:last").text(UpdateCounter(initial_wage, accumulated));
    }, 1000);
})
