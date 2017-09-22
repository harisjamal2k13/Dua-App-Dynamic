var database = firebase.database().ref('/');
// var auth = firebase.auth();

var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var userPass = document.getElementById("userPass");

function signup() {
    var user = {
        userFirstName: userFirstName.value,
        userLastName: userLastName.value,
        userEmail: userEmail.value,
        userPass: userPass.value,
        age: age.value,
        cellNo: cellNo.value,
        gender: gender.value
    }
    console.log(user);

    firebase.auth().createUserWithEmailAndPassword(user.userEmail, user.userPass)
    .then(function (res) {
        database.child('user/'+ res.uid).set(user)
        .then(function(res){
            alert('Success!')
            location = "login.html";

        })
        // console.log(res.uid);
    })
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});
}
function login(){
    location = "login.html";
}

