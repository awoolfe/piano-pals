// Dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');var app = express();
var server = http.Server(app);
var io = socketIO(server);
app.set('port', 5000);
app.use('/static', express.static(__dirname + '/static'));// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});// Starts the server.
server.listen(5000, function() {
  console.log('Starting server on port 5000');
});
// require("tone/package.json"); // tone is a peer dependency. 

// require("webmidi/package.json"); // webmidi is a peer dependency. 
// var piano = require("@tonejs/piano")

// Add the WebSocket handlers
io.on('connection', function(socket) {
});


var players = {};
io.on('connection', function(socket) {
  socket.on('new player', function() {
    players[socket.id] = {
      tone: 'none'
    };
  });
  socket.on('synth', function(data) {
    var player = players[socket.id] || {};
    if (data.C4) {
        player.tone = "C4";
    }
    else if (data.Csharp4) {
          player.tone = "C#4";
        }
    else if (data.D4) {
          player.tone = "D4";
        }
    else if (data.Dsharp4) {
          player.tone = "D#4";
        }
    else if (data.E4) {
          player.tone = "E4";
        }
    else if (data.F4) {
          player.tone = "F4";
        }
    else if (data.Fsharp4) {
          player.tone = "F#4";
        }
    else if (data.G4) {
          player.tone = "G4";
        }
    else if (data.Gsharp4) {
          player.tone = "G#4";
        }
    else if (data.A4) {
          player.tone = "A4";
        }
    else if (data.Asharp4) {
          player.tone = "A#4";
        }
    else if (data.B4) {
          player.tone = "B4";
        }
    else if (data.C5) {
          player.tone = "C5";
        }
    else if (data.Csharp5) {
          player.tone = "C#5";
        }
    else if (data.D5) {
          player.tone = "D5";
        }
    else if (data.Dsharp5) {
          player.tone = "D#5";
        }
    else if (data.E5) {
          player.tone = "E5";
        }
    else if (data.F5) {
          player.tone = "F5";
        }
    else if (data.Fsharp5) {
          player.tone = "F#5";
        }
    else if (data.G5) {
          player.tone = "G5";
        }
    else if (data.Gsharp5) {
          player.tone = "G#5";
        }
    else if (data.A5) {
          player.tone = "A5";
        }
    else if (data.Asharp5) {
          player.tone = "A#5";
         }
    else if (data.B5) {
          player.tone = "B5";
        }
    else {
      player.tone = "none";
    }
  });  
});setInterval(function() {
  io.sockets.emit('state', players);
}, 1000 / 70);