const btnDaily = document.querySelector('#btn-daily')
const btnWeekly = document.querySelector('#btn-weekly')
const btnMonthly = document.querySelector('#btn-monthly')

const cardTitles = document.querySelectorAll('.card-title')
const cardCurrentTimes = document.querySelectorAll('.current-time')
const cardPreviousFrame = document.querySelectorAll('.previous-frame')
const cardPreviousTime = document.querySelectorAll('.previous-time')

let frameSelected 
let dataJSON
let cuttedFrame
let prevFrame
let btnSelected = -1

btnDaily.addEventListener('click', function() {
  if(btnSelected != 0){ btnDaily.classList.toggle('opacity-50')}
  if (btnSelected == 1) {
    btnWeekly.classList.toggle('opacity-50')
  }else if(btnSelected == 2){
    btnMonthly.classList.toggle('opacity-50')
  }
  
    btnSelected = 0
  

  renderCardsTime('daily')
})
btnWeekly.addEventListener('click', function (){

  if(btnSelected != 1){ btnWeekly.classList.toggle('opacity-50')}
  if (btnSelected == 0) {
    btnDaily.classList.toggle('opacity-50')
  }else if(btnSelected == 2){
    btnMonthly.classList.toggle('opacity-50')
  }
  
    btnSelected = 1
  
  renderCardsTime('weekly')
})
btnMonthly.addEventListener('click', function (){
  if(btnSelected != 2){ btnMonthly.classList.toggle('opacity-50')}
  if (btnSelected == 0) {
    btnDaily.classList.toggle('opacity-50')
  }else if(btnSelected == 1){
    btnWeekly.classList.toggle('opacity-50')
  }
  
    btnSelected = 2
  
 
  renderCardsTime('monthly')
})


getDataJSON()
function getDataJSON() {
  fetch('../data.json')
  .then(response => response.json())
  .then(data => {
    dataJSON = data

    renderCardsTime('monthly')
  })
  .catch(error => {
    console.error('Error al obtener el archivo JSON:', error);
  });}



  function renderCardsTime(frameSelected) {
    for (let index = 0; index < dataJSON.length; index++) {
      const timeframe = dataJSON[index];
      cardTitles[index].textContent = dataJSON[index].title
      cardCurrentTimes[index].textContent = dataJSON[index].timeframes[frameSelected].current + 'hrs'
      prevFrame = frameSelected
      if (prevFrame.length > 5 ) {
        cuttedFrame = prevFrame.slice(0, prevFrame.length - 2)

      }else if (prevFrame.length == 5 ){

        cuttedFrame = 'day'
      }
      cardPreviousFrame[index].textContent = 'last ' + cuttedFrame
      cardPreviousTime[index].textContent = dataJSON[index].timeframes[frameSelected].previous + ' hrs'
      
    }
  }