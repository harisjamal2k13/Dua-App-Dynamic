var database = firebase.database().ref('/');


var userEmail = document.getElementById("userEmail");
var userPass = document.getElementById("userPass");

document.getElementById("stop").addEventListener("submit",
    function submit() {
        event.preventDefault()
        
        var user = {
            email: userEmail.value,
            pass: userPass.value 
        }
    firebase.auth().signInWithEmailAndPassword(user.email, user.pass)
    .then(
        function (success) {
            // console.log(success.uid);
            database.child("user/" + success.uid)
            .once("value",function(snapshot) {

                var convert = JSON.stringify(snapshot.val())
                localStorage.setItem('loggedInUser', convert)
                console.log(convert)
                location = "dashboard.html"

                // console.log(snapshot.val())
                // localStorage.setItem("user",JSON.stringify(snapshot.val))
            })

        }
    )
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode === 'auth/wrong-password') {
    alert('Wrong password.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});
        
    })