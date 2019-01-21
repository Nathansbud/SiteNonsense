var audio = [new Audio("audio/furthermore.mp3"), new Audio("audio/additionally.mp3"), new Audio("audio/moreover.mp3")];
document.getElementById("furthermore").addEventListener("click", function(){
    audio[0].play();
})

document.getElementById("additionally").addEventListener("click", function(){
    audio[1].play();
})

document.getElementById("moreover").addEventListener("click", function(){
    audio[2].play();
})

