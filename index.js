// document.querySelectorAll(".drum").forEach(drum => {
//     drum.addEventListener("click", function handleClick(){
//         alert("I got clicked!");
//     });
// });

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//Detecting Button Press

for (var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML)

    });
}

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();

//Detecting Keyboard Press

document.addEventListener("keydown", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
});


function makeSound(key){
    console.log(key);
    switch (key) {
        case "w":
            var crashSound = new Audio("sounds/crash.mp3");
            crashSound.play();
            break;
        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "s":
            var snareSound = new Audio("sounds/snare.mp3");
            snareSound.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            console.log();
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.toggle("pressed");
    setTimeout(function (){
        activeButton.classList.toggle("pressed")} 
        , 100);
}