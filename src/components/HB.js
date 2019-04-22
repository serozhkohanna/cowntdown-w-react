import React from 'react'

const HB = function () {

  const submit = (e) =>{
    e.preventDefault();
    let input = document.querySelector('input').value;
    console.log(input);

    let today = new Date();
    let Bday = new Date(input);
    let msPerDay = 24 * 60 * 60 * 1000;

    let timeLeft = (Bday.getTime() - today.getTime());
    let e_daysLeft = timeLeft / msPerDay;

    let daysLeft = Math.floor(e_daysLeft);

    let e_hrsLeft = (e_daysLeft - daysLeft)*24;
    let hrsLeft = Math.floor(e_hrsLeft);
    let minsLeft = Math.floor((e_hrsLeft - hrsLeft)*60);

    let dataList = document.querySelector('.dataList');
    dataList.children[0].innerText = daysLeft;
    dataList.children[1].innerText = hrsLeft;
    dataList.children[2].innerText = minsLeft;

    let keyList = document.querySelector('.keyList');
    keyList.style.display = 'grid';
  };
  let style = {
    display:'none'
  }
  return(
    <div className = 'page'>
    <p><b>Your Bithday</b> Countdown</p>

    <form onSubmit = {submit}>
    <p>write your b-day date</p>
    <input type = 'text' placeholder = 'e.g. 15 January 2020'/>

    </form>
    <ul className = 'dataList'>
    <li></li>
    <li></li>
    <li></li>
    </ul>

    <ul className = 'keyList' style = {style} >
    <li>Days</li>
    <li>Hours</li>
    <li>Minutes</li>
    </ul>

    </div>
  )
}
export default HB;
