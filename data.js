var firebaseConfig = {
    apiKey: "AIzaSyDO3YyBYfOyAZQrs41o3Z6Kzd3lLmL6WOQ",
    authDomain: "signup-4b085.firebaseapp.com",
    projectId: "signup-4b085",
    storageBucket: "signup-4b085.appspot.com",
    messagingSenderId: "296781660060",
    appId: "1:296781660060:web:1f9f677e7884c36e765259",
    measurementId: "G-RBSMFXPPPW"
  }; 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}