  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA1Wk3Grve6z5QjPx_gcOwcaAjZU3zjo1U",
    authDomain: "a-biblia-sagrada.firebaseapp.com",
    databaseURL: "https://a-biblia-sagrada.firebaseio.com",
    projectId: "a-biblia-sagrada",
    storageBucket: "a-biblia-sagrada.appspot.com",
    messagingSenderId: "210414208734",
    appId: "1:210414208734:web:7bc4a967a161d30454e44f",
    measurementId: "G-QTMZ8HFDJF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.auth().signInAnonymously().catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });