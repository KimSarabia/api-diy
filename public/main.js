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

function getProduct(){
  var multiplicand = $('#multiplicand').val();
  var multiplier = $('#multiplier').val();

  $.get(`/math/product/${multiplicand}/${multiplier}`)
  .done(function(data){
    console.log('data:',data);
  })
  .fail(function(error) {
    console.log('error:', error);
  });
}

function getQuotient(){
  var divisor = $('#divisor').val();
  var dividend = $('#dividend').val();

  $.get(`/math/quotient/${divisor}/${dividend}`)
  .done(function(data){
    console.log('data:',data);
  })
  .fail(function(error) {
    console.log('error:', error);
  });
}

function getSum(){
  var addendOne = $('#addendOne').val();
  var addendTwo = $('#addendTwo').val();

  $.get(`/math/sum/${addendOne}/${addendTwo}`)
  .done(function(data){
    console.log('data:',data);
  })
  .fail(function(error) {
    console.log('error:', error);
  });
}
function getDiff(){
  var minuend = $('#minuend').val();
  var subtrahend = $('#subtrahend').val();

  $.get(`/math/diff/${minuend}/${subtrahend}`)
  .done(function(data){
    console.log('data:',data);
  })
  .fail(function(error) {
    console.log('error:', error);
  });
}
