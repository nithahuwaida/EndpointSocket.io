// Make connection
let socket = io.connect('http://localhost:8000');

// Query DOM
let message = document.getElementById('message');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let handle = document.getElementById('handle');


// Emit events
btn.addEventListener('click', function(){
    socket.emit('comment', {
        message: message.value,
        handle: handle.value
    });
    message.value = "";
    handle.value = "";
});

// Listen for events
socket.on('comment', function(data){
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});