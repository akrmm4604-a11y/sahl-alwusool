importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB7riqtl...",
  authDomain: "sahlalwusool.firebaseapp.com",
  projectId: "sahlalwusool",
  storageBucket: "sahlalwusool.appspot.com",
  messagingSenderId: "442219840408",
  appId: "1:442219840408:web:..."
});

const messaging = firebase.messaging();
