const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    if(input.value){
        socket.emit('chat', input.value); // envia el valor de input al servidor
        input.value = '';  // clear el valor del input
    }
});

// Cuando reciba el mensaje en chat ..
socket.on('chat', (msg) => {
    console.log("Mensaje recibido: ");
    const item = document.createElement("li");
    item.textContent =  msg;
    messages.appendChild(item); // añade el nuevo item a la lista de mensajes
})