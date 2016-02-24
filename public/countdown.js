//counter, not implemented yet
$(document).ready(function(){ updateClock('2016-06-25'); 
 }) 


function getDaysRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  return Math.floor( t/(1000*60*60*24) );
}


function updateClock(endtime){
  var t = getDaysRemaining(endtime);
    var clock = document.getElementById('clockdiv');
    clock.innerHTML = '<span id="clock" class="label label-danger">Nästa tävling om: ' + t + ' dagar</span>' 

  
  if(t.total<=0){
    clearInterval(timeinterval);
  }
}
