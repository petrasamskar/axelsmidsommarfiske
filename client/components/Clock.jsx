import React from 'react';

export default class Clock extends React.Component {

_getDaysRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    return Math.floor( t/(1000*60*60*24) );
}

_updateClock(){
    var t = this._getDaysRemaining('2018-06-22');
 
    if(t.total<=0){
        clearInterval(timeinterval);
    }
    return t;
}

  render() {
    return (
        <span className="label label-danger" id="clock" >Nästa tävling om {this._updateClock()} dagar</span>    
    );
  }
}