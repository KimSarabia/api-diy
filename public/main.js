'use strict';
$(function() {
    console.log('works:', 'hello main!');
    document.getElementsByTagName('h1')[0].textContent = "WORKING";
    $('button#getSquare').click(getSquare);
    $('button#getCube').click(getCube);
    $('button#getProduct').click(getProduct);
    $('button#getQuotient').click(getQuotient);
    $('button#getDiff').click(getDiff);
    $('button#getSum').click(getSum);
    $('button#getWordCount').click(getWordCount);
    $('button#getGravatar').click(getGravatar);

});

function getSquare() {
    var num = $('#num').val();

    $.get(`/math/square/${num}`)
        .done(function(data) {
            console.log('data:', data);
            $('#squareResult').text(data);
        })
        .fail(function(error) {
            console.log('error:', error);
        });
}

function getCube() {
    var num = $('#num').val();

    $.get(`/math/cube/${num}`)
        .done(function(data) {
            console.log('data:', data);
            $('#cubeResult').text(data);

        })
        .fail(function(error) {
            console.log('error:', error);
        });
}

function getProduct() {
    var multiplicand = $('#multiplicand').val();
    var multiplier = $('#multiplier').val();

    $.get(`/math/product/${multiplicand}/${multiplier}`)
        .done(function(data) {
            console.log('data:', data);
            $('#productResult').text(data);
        })
        .fail(function(error) {
            console.log('error:', error);
        });
}

function getQuotient() {
    var divisor = $('#divisor').val();
    var dividend = $('#dividend').val();

    $.get(`/math/quotient/${divisor}/${dividend}`)
        .done(function(data) {
            console.log('data:', data);
            $('#quotientResult').text(data);
        })
        .fail(function(error) {
            console.log('error:', error);
        });
}

function getSum() {
    var addendOne = $('#addendOne').val();
    var addendTwo = $('#addendTwo').val();

    $.get(`/math/sum/${addendOne}/${addendTwo}`)
        .done(function(data) {
            console.log('data:', data);
            $('#sumResult').text(data);
        })
        .fail(function(error) {
            console.log('error:', error);
        });
}

function getDiff() {
    var minuend = $('#minuend').val();
    var subtrahend = $('#subtrahend').val();

    $.get(`/math/diff/${minuend}/${subtrahend}`)
        .done(function(data) {
            console.log('data:', data);
            $('#diffResult').text(data);
        })
        .fail(function(error) {
            console.log('error:', error);
        });
}


function getWordCount() {
  console.log('word count:', 'count!');
    var count = $('#count').val();

    $.get(`/str/wordCount/${count}/`)
        .done(function(data) {
            console.log('data:', data);
            $('#countResult').text(data);
        })
        .fail(function(error) {
            console.log('error:', error);
        });
}

function getGravatar() {
    var gravatar = $('#gravatarThing').val();

    $.get(`/gravatar/diff/${minuend}`)
        .done(function(data) {
            console.log('data:', data);
            $('#resUrl').text(data);
        })
        .fail(function(error) {
            console.log('error:', error);
        });
}
