// firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onChildAdded } from 'firebase/database';

// Configuração do Firebase (substitua com suas próprias informações)
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
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, push, onChildAdded };
