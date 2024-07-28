// script.js

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDTsB2FmclyaDlYnXbvXr9hbYLYWdzwJ7Q",
    authDomain: "chat-e382a.firebaseapp.com",
    databaseURL: "https://chat-e382a-default-rtdb.firebaseio.com",
    projectId: "chat-e382a",
    storageBucket: "chat-e382a.appspot.com",
    messagingSenderId: "493355104367",
    appId: "1:493355104367:web:ec234a469ad619bdff759a"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const chatWindow = document.getElementById('chat-window');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        const messagesRef = database.ref('messages');
        messagesRef.push({ text: messageText })
            .then(() => {
                messageInput.value = '';
            })
            .catch(error => {
                console.error("Error sending message: ", error);
            });
    }
}

database.ref('messages').on('child_added', (snapshot) => {
    const message = snapshot.val();
    const messageElement = document.createElement('div');
    messageElement.textContent = message.text;
    messageElement.classList.add('message');
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
});
