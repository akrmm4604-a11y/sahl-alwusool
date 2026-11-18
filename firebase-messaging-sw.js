importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB7riqtl...",
  authDomain: "sahlalwusool.firebaseapp.com",
  projectId: "sahlalwusool",
  storageBucket: "sahlalwusool.appspot.com",
  messagingSenderId: "442219840408",
  appId: "1:442219840408:web:7157a918a2408bcf82"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/sahl-alwusool/favicon.ico'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
