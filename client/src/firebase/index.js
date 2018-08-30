import firebase from 'firebase/app'
import 'firebase/storage'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCs2JqCKip2T4wJC5IvIXxKWCG8ObwdzJc",
    authDomain: "photos-da745.firebaseapp.com",
    databaseURL: "https://photos-da745.firebaseio.com",
    projectId: "photos-da745",
    storageBucket: "photos-da745.appspot.com",
    messagingSenderId: "831308364391"
  };

  firebase.initializeApp(config);

  const storage = firebase.storage();

  export{
      storage, firebase as default
  }