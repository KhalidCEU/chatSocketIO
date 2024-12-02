const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const usernameInput = document.getElementById('username');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value || 'Anónimo';
    if (input.value) {
        // Envía el mensaje junto con el nombre de usuario
        socket.emit('chat', { user: username, message: input.value });
        input.value = ''; // Limpia el campo de entrada
    }
});

// Cuando reciba el mensaje en chat ..
socket.on('chat', (data) => {
    console.log("Mensaje recibido: ");
    const item = document.createElement("li");
    item.textContent = `${data.user}: ${data.message}`; // Muestra el nombre y el mensaje
    messages.appendChild(item);
});