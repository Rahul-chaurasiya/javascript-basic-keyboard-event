//Accessing each Button using their Id
var Qbutton = document.getElementById('BTNq');
var Wbutton = document.getElementById('BTNw');
var Ebutton = document.getElementById('BTNe');
var Rbutton = document.getElementById('BTNr');
var Tbutton = document.getElementById('BTNt');
var Ybutton = document.getElementById('BTNy');
var Ubutton = document.getElementById('BTNu');
var Ibutton = document.getElementById('BTNi');
var Obutton = document.getElementById('BTNo');

// var allButton=document.getElementById('BTNo');
// var allButton=document.getElementsByClassName('keyBTN1');
//Accessing the first button using their Class name and since getElementsByClassName is returning collection of object therefore using index [0] for first element.
var allButton = document.getElementsByClassName('keyBTN')[0];

//Accessing each audio files using their id.
var Qmusic = document.getElementById('Qsound');
var Wmusic = document.getElementById('Wsound');
var Emusic = document.getElementById('Esound');
var Rmusic = document.getElementById('Rsound');
var Tmusic = document.getElementById('Tsound');
var Ymusic = document.getElementById('Ysound');
var Umusic = document.getElementById('Usound');
var Imusic = document.getElementById('Isound');
var Omusic = document.getElementById('Osound');
// Qbutton.accessKey="W";
// const Qmusic =new Audio('/Sounds/boom.mp3');
// function playSound() {
//     Qmusic.src='//Sounds/boom.mp3'
//     Qmusic.play();
// }

//adding event listener for only those keys which are shown on browser(since there was only 9 audio files so I added only 9 buttons) with functionality of audio and change background color to differentiate which button is being pressed.
document.body.addEventListener('keydown', function (e) {
    // var keyCharacter=event.key;//This gives sensitive case character
    var keyCharacter = String.fromCharCode(e.keyCode);
    // Qbutton.style.backgroundColor='Yellow';
    switch (keyCharacter) {
        case 'Q': Qmusic.play(); Qbutton.style.backgroundColor = 'Yellow';
            // Qmusic.autoplay='true';
            // Qmusic.autoplay;
            console.log(Qmusic);
            break;
        case 'W': Wmusic.play();
            Wbutton.style.backgroundColor = 'Yellow';
            break;
        case 'E': Emusic.play(); Ebutton.style.backgroundColor = 'Yellow';
            break;
        case 'R': Rmusic.play(); Rbutton.style.backgroundColor = 'Yellow';
            break;
        case 'T': Tmusic.play(); Tbutton.style.backgroundColor = 'Yellow';
            break;
        case 'Y': Ymusic.play(); Ybutton.style.backgroundColor = 'Yellow';
            break;
        case 'U': Umusic.play(); Ubutton.style.backgroundColor = 'Yellow';
            break;
        case 'I': Imusic.play(); Ibutton.style.backgroundColor = 'Yellow';
            break;
        case 'O': Omusic.play(); Obutton.style.backgroundColor = 'Yellow';
            break;
        default:
            alert('Kindly press amongst shown Keyboard buttons on screens.');
            console.log(event.key);
    }




})

//adding the event listener KeyUp so that the background colour gets reset.
document.body.addEventListener('keyup',
    function (e) {
        var keyCharacter = String.fromCharCode(e.keyCode);
        switch (keyCharacter) {
            case 'Q': Qbutton.style.backgroundColor = '';
                break;
            case 'W': Wbutton.style.backgroundColor = '';
                break;
            case 'E': Ebutton.style.backgroundColor = '';
                break;
            case 'R': Rbutton.style.backgroundColor = '';
                break;
            case 'T': Tbutton.style.backgroundColor = '';
                break;
            case 'Y': Ybutton.style.backgroundColor = '';
                break;
            case 'U': Ubutton.style.backgroundColor = '';
                break;
            case 'I': Ibutton.style.backgroundColor = '';
                break;
            case 'O': Obutton.style.backgroundColor = '';
                break;
            default:
        }
    })
