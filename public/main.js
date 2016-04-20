'use strict';
$(function(){
  console.log('works:', 'hello main!');
  document.getElementsByTagName('h1')[0].textContent = "WORKING";
  $('button#getSquare').click(getSquare);
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
