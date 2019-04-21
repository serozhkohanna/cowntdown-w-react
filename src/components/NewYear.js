import React from 'react'

const NewYear = function () {

  let today = new Date();
  let newYear = new Date('31 December 2019');
  let msPerDay = 24 * 60 * 60 * 1000;

  let timeLeft = (newYear.getTime() - today.getTime());
  let e_daysLeft = timeLeft / msPerDay;

  let daysLeft = Math.floor(e_daysLeft);

  let e_hrsLeft = (e_daysLeft - daysLeft)*24;
  let hrsLeft = Math.floor(e_hrsLeft);
  let minsLeft = Math.floor((e_hrsLeft - hrsLeft)*60);

  console.log(daysLeft,hrsLeft,minsLeft);

  return(
    <div className = 'page'>
    <p><b>New Year</b> Countdown</p>

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

    <p id = 'capital-letter'>NY</p>
    <div id = 'label'></div>
    <div id = 'label-1'></div>
    <p id ='label-text'>#newyeariscoming</p>
    </div>
  )
}
export default NewYear;
