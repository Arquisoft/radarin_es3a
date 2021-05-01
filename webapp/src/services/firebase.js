import firebase from "firebase/app";
import "firebase/messaging";

var firebaseConfig = {
    apiKey: "AIzaSyBXfLAAMgu31qw2Y2JTfcj03ZKghEcV6Dw",
    authDomain: "radarin-es3a.firebaseapp.com",
    projectId: "radarin-es3a",
    storageBucket: "radarin-es3a.appspot.com",
    messagingSenderId: "407429701050",
    appId: "1:407429701050:web:811db1dbe2157f07981183",
    measurementId: "G-VLC6HJHN5M"
};
// Initialize Firebase
try {
firebase.initializeApp(firebaseConfig);
} catch (error) {
  // console.log(error);
}
var messaging;
try {
  messaging = firebase.messaging();
} catch (error) {
  // console.log(error);
}

export const getToken = (func) => {
  if(messaging)
    return messaging.getToken({vapidKey: "BHlbBCyBGj27GsWwC87p4G15nhu2HgROHqAi8ty92MHgv3YVVXvK_YPy_FFRHGUain-0KSPQgrbdH4SY0aDXfc4"})
        .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        func(currentToken);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log("No registration token available. Request permission to generate one.");
        requestPermission(func);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
      requestPermission(func);
    });
};

function requestPermission(func) {
  Notification.requestPermission().then(async permission => {
    if (permission === "denied") {
        console.log("Permission wasn't granted. Allow a retry.");
        return;
    } else if (permission === "default") {
        console.log("The permission request was dismissed.");
        return;
    }
    const token = await messaging.getToken();
    console.log("user token: ", token);

    func(token);
});
}

// Foreground listener
export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});
