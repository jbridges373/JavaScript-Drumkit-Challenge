// Key Codes
const keyCodes = {
    "boom": 49,
    "clap": 50,
    "hi-hat": 51,
    "kick": 52,
    "open-hat": 53,
    "ride": 54,
    "snare": 55,
    "tink": 56,
    "tom": 57
}

// Load Audio into memory
const boom = new Audio("./sounds/boom.wav");
const clap = new Audio("./sounds/clap.wav");
const hiHat = new Audio("./sounds/hihat.wav");
const kick = new Audio("./sounds/kick.wav");
const openHat = new Audio("./sounds/openhat.wav");
const ride = new Audio("./sounds/ride.wav");
const snare = new Audio("./sounds/snare.wav");
const tink = new Audio("./sounds/tink.wav");
const tom = new Audio("./sounds/tom.wav");

// Buttons loaded for animation
const btnBoom = document.getElementById("boom");
const btnClap = document.getElementById("clap");
const btnHiHat = document.getElementById("hi-hat");
const btnKick = document.getElementById("kick");
const btnOpenHat = document.getElementById("open-hat");
const btnRide = document.getElementById("ride");
const btnSnare = document.getElementById("snare");
const btnTink = document.getElementById("tink");
const btnTom = document.getElementById("tom");

// Add window event listener for all button clicks
document.addEventListener("click", e => {
    // Check if the ID of the clicked div is in the keyCodes dictionary, 
    // play the corresponding sound if it is
    if (e.target.id in keyCodes) {
        playSound(keyCodes[e.target.id]);
    }
});

// Add an event listener that passes the keyCode of keystroke to the playSound function
document.addEventListener("keypress", e => {
    playSound(e.keyCode);
});

const playSound = (key) => {
    // Evaluate the variable "key"
    switch (key) {
        // If key = 49 then log the sound that should be played, toggle the "activate" class,
        // and then after 100ms toggle it again
        // After that, pause the sound, regardless on if it is playing
        // set the current time of the sound to 0 to restart it
        // then play the sound. 
        // After this break out of the function
        case 49:
            // boom
            console.log("boom")
            // Trigger Animation
            btnBoom.classList.toggle('activate');
            setTimeout(() => {
                btnBoom.classList.toggle('activate');
            }, 100)
            // Play Sound
            boom.pause();
            boom.currentTime = 0;
            boom.play();
            break;
        case 50:
            // clap
            console.log("clap")
            btnClap.classList.toggle('activate');
            setTimeout(() => {
                btnClap.classList.toggle('activate');
            }, 100)
            clap.pause();
            clap.currentTime = 0;
            clap.play();
            break;
        case 51:
            // hi-hat
            console.log("hi-hat")
            btnHiHat.classList.toggle('activate');
            setTimeout(() => {
                btnHiHat.classList.toggle('activate');
            }, 100)
            hiHat.pause();
            hiHat.currentTime = 0;
            hiHat.play();
            break;
        case 52:
            // kick
            console.log("kick")
            btnKick.classList.toggle('activate');
            setTimeout(() => {
                btnKick.classList.toggle('activate');
            }, 100)
            kick.pause();
            kick.currentTime = 0;
            kick.play();
            break;
        case 53:
            // open-hat
            console.log("open-hat")
            btnOpenHat.classList.toggle('activate');
            setTimeout(() => {
                btnOpenHat.classList.toggle('activate');
            }, 100);
            openHat.pause();
            openHat.currentTime = 0;
            openHat.play();
            break;
        case 54:
            // ride
            console.log("ride")
            btnRide.classList.toggle('activate');
            setTimeout(() => {
                btnRide.classList.toggle('activate');
            }, 100)
            ride.pause();
            ride.currentTime = 0;
            ride.play();
            break;
        case 55:
            // snare
            console.log("snare");
            btnSnare.classList.toggle('activate');
            setTimeout(() => {
                btnSnare.classList.toggle('activate');
            }, 100)
            snare.pause();
            snare.currentTime = 0;
            snare.play();
            break;
        case 56:
            // tink
            console.log("tink")
            btnTink.classList.toggle('activate');
            setTimeout(() => {
                btnTink.classList.toggle('activate');
            }, 100)
            tink.pause();
            tink.currentTime = 0;
            tink.play();
            break;
        case 57:
            // tom
            console.log("tom")
            btnTom.classList.toggle('activate');
            setTimeout(() => {
                btnTom.classList.toggle('activate');
            }, 100)
            tom.pause();
            tom.currentTime = 0;
            tom.play();
            break;
        default:
            console.log(e.keyCode)
    }
};