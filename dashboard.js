var database = firebase.database().ref('/')
var user = JSON.parse(localStorage.getItem("loggedInUser"))
console.log(user)


// var heading = document.getElementById("").innerHTML = user.userFirstName + "" + user.userLastName
var userFirstName = document.getElementById('userfirstName').innerHTML = user.userFirstName
var userLastName = document.getElementById('userlastName').innerHTML = user.userLastName
var userEmail = document.getElementById('useremail').innerHTML = user.userEmail
var userAge = document.getElementById('age').innerHTML = user.age
var userCell = document.getElementById('cellNo').innerHTML = user.cellNo
var userGender = document.getElementById('gender').innerHTML = user.gender
var dua = document.getElementById('dua')

function allDuayn(){
    location ="Feeds.html";
}

function praySubmit() {
    var obj = {
        pray: dua.value,
        userName: user.userFirstName + " " + user.userLastName
    }


    database.child('post').push(obj)
    console.log(obj)
    dua.value = ""
}