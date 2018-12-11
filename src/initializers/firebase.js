import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD9KX4KkxM3KXD1cC2kt3gvL-qeyz7KaAo",
    authDomain: "albumes-facilito-react-f2d61.firebaseapp.com",
    databaseURL: "https://albumes-facilito-react-f2d61.firebaseio.com",
    projectId: "albumes-facilito-react-f2d61",
    storageBucket: "albumes-facilito-react-f2d61.appspot.com",
    messagingSenderId: "1063870783823"
  };

firebase.initializeApp(config);

export default firebase;