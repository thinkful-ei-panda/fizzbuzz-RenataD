/* eslint-disable strict */
$(function() {
  $('#number-chooser').submit(e => {
    e.preventDefault();

    $('.js-results').empty();
    const num = parseInt( $(e.currentTarget).find(
      'input[name="number-choice"]').val());
    const printResult = [];
    for (let i = 1; i <= num; i ++) {
      if (i % 15 === 0) {
        printResult.push($('<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>'));  
      }
      else if (i % 5 === 0) {
        printResult.push($('<div class="fizz-buzz-item buzz"><span>buzz</span></div>')); 
      }
      else if (i % 3 === 0) {
        printResult.push($('<div class="fizz-buzz-item fizz"><span>fizz</span></div>')); 
      }
      else {
        printResult.push($(`<div class="fizz-buzz-item"><span>${i}</span></div>`)); 
      }
    }
    $('.js-results').append(printResult);
  });
    
});