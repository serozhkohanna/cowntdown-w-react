import React, {Component} from 'react';

class Timer extends Component{
  state = {
    day:new Date('29 April 2019')
  }

  render(){
    let today = new Date();
    let Easter =  this.state.day;
    let msPerDay = 24 * 60 * 60 * 1000;

    let timeLeft = (Easter.getTime() - today.getTime());
    let e_daysLeft = timeLeft / msPerDay;

    let daysLeft = Math.floor(e_daysLeft);

    let e_hrsLeft = (e_daysLeft - daysLeft)*24;
    let hrsLeft = Math.floor(e_hrsLeft);
    let minsLeft = Math.floor((e_hrsLeft - hrsLeft)*60);

    return(
      <div>

      <div className = 'page'>
      <p><b>Easter</b> Countdown</p>

      <ul className = 'dataList'>
      <li>{daysLeft}</li>
      <li>{hrsLeft}</li>
      <li>{minsLeft}</li>
      </ul>

      <ul className = 'keyList'>
      <li>Days</li>
      <li>Hours</li>
      <li>Minutes</li>
      </ul>


      </div>
      </div>
    )
  }
}

export default Timer;
