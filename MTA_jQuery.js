// noprotect
$(document).ready(function(){ 


function randColor() {
  return 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
}

var disco = $('.disco').each(function(index,element) {
  setInterval(function(){
     $(element).css('color', randColor());
}, 20);
});




var mta = {
  'n': ['ts', '34th', '28th-n', '23rd-n', 'us', '8th-n'],
  'l': ['8th-l', '6th', 'us', '3rd', '1st'],
  's': ['gc', '33rd', '28th-s', '23rd-s', 'us', 'ap']
};


function menu() {
    var userInput = getUserInput();
    var tripLength = calculateStops(userInput);
    alert('Your trip length is ' + tripLength + ' stops!');
  }


function getUserInput() {
  var originStop = $('.result').on('click', function(){
   ($('.start'));
 });
  var destinationStop = $('.result').on('click', function(){
   ($('.finish'));
   console.log(getUserInput);
  return {startTrain: startTrain, 
          firstStop: firstStop,
          stopTrain: stopTrain,
          lastStop: lastStop};
        });
}

function calculateStops(userInput) {
  return userInput.startTrain === userInput.stopTrain ? sameLine(userInput) : differentLines(userInput);
}

function differentLines(userInput) {
  var intersection = mta[userInput.startTrain].filter(function(stop) {
      return mta[userInput.stopTrain].indexOf(stop) != -1;
    })[0];
}
  var startTrainIndex = mta[userInput.startTrain].indexOf(userInput.firstStop);
  var startTrainIntersectionIndex = mta[userInput.startTrain].indexOf(intersection);
  var firstTripLength = Math.abs(startTrainIndex - startTrainIntersectionIndex);

  var stopTrainIndex = mta[userInput.stopTrain].indexOf(userInput.lastStop);
  var stopTrainIntersectionIndex = mta[userInput.stopTrain].indexOf(intersection);
  var lastTripLength = Math.abs(stopTrainIndex - stopTrainIntersectionIndex);

  $('.result').on('click', function(){ {
  $('#balance1').html("$" + (firstTripLength + lastTripLength));
}

function sameLine(userInput) {
  return Math.abs(mta[userInput.startTrain].indexOf(userInput.firstStop) - mta[userInput.stopTrain].indexOf(userInput.lastStop));
}

menu();

     });
});          