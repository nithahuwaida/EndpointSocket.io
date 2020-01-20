// Make connection
let socket = io.connect('http://localhost:8000');

// Query DOM
let likecount = document.getElementById('likecount');
let btnlike = document.getElementById('btnlike');


// Emit events
btnlike.addEventListener('click', function(){
    socket.emit('like', {
        likecount: likecount+1,
    });
});

// Listen for events
socket.on('like', function(data){
    output.innerHTML += '<p><strong>' + data.likecount + ': </strong></p>';
});