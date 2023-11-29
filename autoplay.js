document.querySelector('.js-autoplay-button').addEventListener('click', ()=>{
  autoPlay();
});

let isAutoPlaying = false;
let intervalId;


function autoPlay(){
  if(!isAutoPlaying){
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    },1000);
    isAutoPlaying = true;
  }else{
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}