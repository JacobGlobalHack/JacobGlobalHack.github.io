function sayThatWasEasy(){
    var thatWasEasy = new Audio("sound.mp3");
    thatWasEasy.play();
}
$("#Easy").on("click",sayThatWasEasy);