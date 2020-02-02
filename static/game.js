var socket = io();
socket.on("message", function(data) {
  console.log(data);
});

// Tone.Synth is a basic synthesizer with a single oscillator
//const synth = new Tone.Monophonic();
// Set the tone to sine
//synth.oscillator.type = "sine";
// connect it to the master output (your speakers)
const synth = new Tone.Sampler({
	"C4" : "https://cdn.glitch.com/c45331cc-ba0f-425b-b43f-32bb07db75eb%2FC4.mp3?v=1580618656961",
	"C#4" : "https://cdn.glitch.com/c45331cc-ba0f-425b-b43f-32bb07db75eb%2FCs4.mp3?v=1580618667291",
  "D4": "https://cdn.glitch.com/c45331cc-ba0f-425b-b43f-32bb07db75eb%2FD4.mp3?v=1580618677536",
  "D#4": "https://cdn.glitch.com/c45331cc-ba0f-425b-b43f-32bb07db75eb%2FDs4.mp3?v=1580618697605",
  "E4": "https://cdn.glitch.com/c45331cc-ba0f-425b-b43f-32bb07db75eb%2FE4.mp3?v=1580618704720",
  "F4": "https://cdn.glitch.com/c45331cc-ba0f-425b-b43f-32bb07db75eb%2FF4.mp3?v=1580618714727",
  "F#4": "https://cdn.glitch.com/c45331cc-ba0f-425b-b43f-32bb07db75eb%2FFs4.mp3?v=1580618723196",
  "G4": "https://cdn.glitch.com/c45331cc-ba0f-425b-b43f-32bb07db75eb%2FG4.mp3?v=1580618734721",
  "G#4": "https://cdn.glitch.com/c45331cc-ba0f-425b-b43f-32bb07db75eb%2FGs4.mp3?v=1580618223812",
  "A4": "https://cdn.glitch.com/c45331cc-ba0f-425b-b43f-32bb07db75eb%2FA4.mp3?v=1580618225808",
  "A#4": "https://cdn.glitch.com/c45331cc-ba0f-425b-b43f-32bb07db75eb%2FAs4.mp3?v=1580618632978",
  "B4": "https://cdn.glitch.com/c45331cc-ba0f-425b-b43f-32bb07db75eb%2FB4.mp3?v=1580618643670",
  "C5": "https://cdn.glitch.com/c45331cc-ba0f-425b-b43f-32bb07db75eb%2FC5.mp3?v=1580618660128",
  "C#5": "https://cdn.glitch.com/c45331cc-ba0f-425b-b43f-32bb07db75eb%2FCs5.mp3?v=1580618672743",
  "D5": "https://cdn.glitch.com/c45331cc-ba0f-425b-b43f-32bb07db75eb%2FD5.mp3?v=1580618680637",
  "D#5": "https://cdn.glitch.com/c45331cc-ba0f-425b-b43f-32bb07db75eb%2FDs5.mp3?v=1580618700607",
  "E5": "https://cdn.glitch.com/c45331cc-ba0f-425b-b43f-32bb07db75eb%2FE5.mp3?v=1580618707961",
  "F5": "https://cdn.glitch.com/c45331cc-ba0f-425b-b43f-32bb07db75eb%2FF5.mp3?v=1580618719038",
  "F#5": "https://cdn.glitch.com/c45331cc-ba0f-425b-b43f-32bb07db75eb%2FFs5.mp3?v=1580618727665",
  "G5": "https://cdn.glitch.com/c45331cc-ba0f-425b-b43f-32bb07db75eb%2FG5.mp3?v=1580618738314",
  "G#5": "https://cdn.glitch.com/c45331cc-ba0f-425b-b43f-32bb07db75eb%2FGs5.mp3?v=1580618221205",
  "A5": "https://cdn.glitch.com/c45331cc-ba0f-425b-b43f-32bb07db75eb%2FA5.mp3?v=1580618619604",
  "A#5": "https://cdn.glitch.com/c45331cc-ba0f-425b-b43f-32bb07db75eb%2FAs5.mp3?v=1580618637927",
  "B5": "https://cdn.glitch.com/c45331cc-ba0f-425b-b43f-32bb07db75eb%2FB5.mp3?v=1580618649235"
});
// const synth = new Piano({
//     velocities: 5
// })
synth.toMaster();
// synth.load().then(() => {
//     console.log('loaded!')
// })
const piano = document.getElementById("piano");

piano.addEventListener("mousedown", e => {
  // fires off a note continously until trigger is released
  synth.triggerAttack(e.target.dataset.note);
});

piano.addEventListener("mouseup", e => {
  // stops the trigger
  synth.triggerRelease();
});

var key_note = {
  C4: false,
  Csharp4: false,
  D4: false,
  Dsharp4: false,
  E4: false,
  F4: false,
  Fsharp4: false,
  G4: false,
  Gsharp4: false,
  A4: false,
  Asharp4: false,
  B4: false,
  C5: false,
  Csharp5: false,
  D5: false,
  Dsharp5: false,
  E5: false,
  F5: false,
  Fsharp5: false,
  G5: false,
  Gsharp5: false,
  A5: false,
  Asharp5: false,
  B5: false
};

var key_clicked;

// handles keyboard events
document.addEventListener("keydown", e => {
  //key_pressed = true;
  // e object has the key property to tell which key was pressed
  switch (e.key) {
    case "q":
      key_note.C4 = true;
      key_clicked = "C4";
      break;
      document.querySelector('.key[data-note="C4"]').style.cssText = "border: 3px solid black";
      document.querySelector('.key[data-note="C4"]').style.cssText =
        "border: 3px solid black";
      document.querySelector('.key[data-note="C#4"]').style.cssText =
        "border: 1px solid black";

    case "1":
      key_note.Csharp4 = true;
      key_clicked = "C#4";
      break;

    case "w":
      key_note.D4 = true;
      key_clicked = "D4";
      break;
      
    case "2":
      key_note.Dsharp4 = true;
      key_clicked = "D#4";
      break;

    case "e":
      key_note.E4 = true;
      key_clicked = "E4";
      break;

    case "r":
      key_note.F4 = true;
      key_clicked = "F4";
      break;

    case "3":
      key_note.Fsharp4 = true;
      key_clicked = "F#4";
      break;

    case "t":
      key_note.G4 = true;
      key_clicked = "G4";
      break;

    case "4":
      key_note.Gsharp4 = true;
      key_clicked = "G#4";
      break;

    case "y":
      key_note.A4 = true;
      key_clicked = "A4";
      break;
      
    case "5":
      key_note.Asharp4 = true;
      key_clicked = "A#4";
      break;

    case "u":
      key_note.B4 = true;
      key_clicked = "B4";
      break;

    case "i":
      key_note.C5 = true;
      key_clicked = "C5";
      break;

    case "6":
      key_note.Csharp5 = true;
      key_clicked = "C#5";
      break;

    case "o":
      key_note.D5 = true;
      key_clicked = "D5";
      break;

    case "7":
      key_note.Dsharp5 = true;
      key_clicked = "D#5";
      break;

    case "p":
      key_note.E5 = true;
      key_clicked = "E5";
      break;

    case "[":
      key_note.F5 = true;
      key_clicked = "F5";
      break;

    case "8":
      key_note.Fsharp5 = true;
      key_clicked = "F#5";
      break;

    case "]":
      key_note.G5 = true;
      key_clicked = "G5";
      break;

    case "9":
      key_note.Gsharp5 = true;
      key_clicked = "G#5";
      break;

    case "-":
      key_note.A5 = true;
      key_clicked = "A5";
      break;

    case "0":
      key_note.Asharp5 = true;
      key_clicked = "A#5";
      break;

    case "=":
      key_note.B5 = true;
      key_clicked = "B5";
      break;

  }
   // console.log(key_clicked);
   // if(key_clicked.includes('#'))
   //   document.querySelector(`.black-key[data-note="${key_clicked}"]`).style.cssText = "border: 3px solid black";
   // else {
   //   document.querySelector(`.key[data-note="${key_clicked}"]`).style.cssText = "border: 3px solid black";
   //   document.querySelector(`.black-key[data-note="${key_clicked}"]`).style.cssText = "border: 1px solid black";
   //}
});
// when the key is released, audio is released as well
                          

document.addEventListener("keyup", e => {
  //key_pressed = false;
  switch (e.key) {
    case "q":
      key_note.C4 = false;
    // document.querySelector('.key[data-note="C4"]').style.cssText =
    // "border: 1px solid black";
    case "1":
      console.log(key_note.Csharp4);
      key_note.Csharp4 = false;
      console.log(key_note.Csharp4);
      break;
    case "w":
      key_note.D4 = false;
      break;
    case "2":
      key_note.Dsharp4 = false;
      break;
    case "e":
      key_note.E4 = false;
      break;
    case "r":
      key_note.F4 = false;
      break;
    case "3":
      key_note.Fsharp4 = false;
      break;
    case "t":
      key_note.G4 = false;
      break;
    case "4":
      key_note.Gsharp4 = false;
      break;
    case "y":
      key_note.A4 = false;
      break;
    case "5":
      key_note.Asharp4 = false;
      break;
    case "u":
      key_note.B4 = false;
      break;
    case "i":
      key_note.C5 = false;
      break;
    case "6":
      key_note.Csharp5 = false;
      break;
    case "o":
      key_note.D5 = false;
      break;
    case "7":
      key_note.Dsharp5 = false;
      break;
    case "p":
      key_note.E5 = false;
      break;
    case "[":
      key_note.F5 = false;
      break;
    case "8":
      key_note.Fsharp5 = false;
      break;
    case "]":
      key_note.G5 = false;
      break;
    case "9":
      key_note.Gsharp5 = false;
      break;
    case "-":
      key_note.A5 = false;
      break;
    case "0":
      key_note.Asharp5 = false;
      break;
    case "=":
      key_note.B5 = false;  
      break;
  }
  
  // if(key_clicked.includes('#'))
  //   document.querySelector(`.black-key[data-note="${key_clicked}"]`).style.cssText = "border: 1px solid black";
  // else
  //   document.querySelector(`.key[data-note="${key_clicked}"]`).style.cssText = "border: 1px solid black";
});

function chooseEffect() {
  document.getElementById("choose_effect_button").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

socket.emit("new player");
setInterval(function() {
  socket.emit("synth", key_note);
}, 1000 / 100);

socket.on("state", function(players) {
  
  for (var id in players) {
    var player = players[id];
    if(player.tone != 'none'){
      
      var tone = player.tone;
      
      if(tone.includes('#'))
        document.querySelector(`.black-key[data-note="${tone}"]`).style.cssText = "border: 3px solid black";
      else
        document.querySelector(`.key[data-note="${tone}"]`).style.cssText = "border: 3px solid black";
      
      synth.triggerAttackRelease(tone, 1);
      
      setTimeout(function () {
        if(key_clicked.includes('#'))
          document.querySelector(`.black-key[data-note="${tone}"]`).style.cssText = "border: 1px solid black";
        else
          document.querySelector(`.key[data-note="${tone}"]`).style.cssText = "border: 1px solid black";
      }, 100);     
    }
    
  }
});
