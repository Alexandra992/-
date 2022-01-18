//Styling of video

let play = document.querySelector('#play');
let video = document.querySelector('#video');

play.addEventListener('click', ()=>{
    video.play();
    video.setAttribute('controls', true);
    play.hidden = true;
})

