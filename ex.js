window.addEventListener('load', ()=>{
      var seconds=00;
      var tens=00;
      var mints=00;
      var startButton=document.querySelector('#button-start');
      var stopButton=document.querySelector('#button-stop');
      var resetButton=document.querySelector('#button-reset');
      var appendTens=document.querySelector('#tens');
      var appendSeconds=document.querySelector('#seconds');
      var appendMints=document.querySelector('#mints');

      var interval;


//   startButton
      startButton.addEventListener('click', ()=>{
            clearInterval(interval);

            interval= setInterval(startTimer,10)
      })


// stopButton
stopButton.addEventListener('click',()=>{
       clearInterval(interval);
})



// resetButton
resetButton.addEventListener('click',()=>{
clearInterval(interval);
tens="00";
seconds="00";
appendTens.innerHTML=tens;
appendSeconds.innerHTML=seconds;


})

function startTimer () {
       tens++; 
       
       if(tens <= 9){
         appendTens.innerHTML = "0" + tens;
       }
       
       if (tens > 9){
         appendTens.innerHTML = tens;
         
       } 
       
       if (tens > 99) {
         seconds++;
         appendSeconds.innerHTML = "0" + seconds;
         tens = 0;
         appendTens.innerHTML = "0" + 0;
       }
       
       if (seconds > 9){
         appendSeconds.innerHTML = seconds;
       }
     }
})