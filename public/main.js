'use strict';
$(function(){
  console.log('works:', 'hello main!');
  document.getElementsByTagName('h1')[0].textContent = "WORKING";
  $('button#getSquare').click(getSquare);
  $('button#getCube').click(getCube);
  $('button#getProduct').click(getProduct);
  $('button#getQuotient').click(getQuotient);
  $('button#getDiff').click(getDiff);
  $('button#getSum').click(getSum);
});

function getSquare(){
  var num = $('#num').val();

  $.get(`/math/square/${num}`)
  .done(function(data){
    console.log('data:',data);
  })
  .fail(function(error) {
    console.log('error:', error);
  });
}

function getCube(){
  var num = $('#num').val();

  $.get(`/math/cube/${num}`)
  .done(function(data){
    console.log('data:',data);
  })
  .fail(function(error) {
    console.log('error:', error);
  });
}
