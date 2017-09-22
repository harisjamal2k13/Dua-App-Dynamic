// var database = firebase.database().ref('/');
// var input = document.getElementById('input')
// var unOrderList = document.getElementById('unOrderList')

//                 // function todo() {
//                 //     var todo = {
//                 //         item: input.value,
//                 //         todo: 'DONE'
//                 //     }
//                 //     database.child('todo').push(todo)
//                 // }


// function add() {
//     var user = {
//         item: input.value,
//     }
//     database.child('users').push(user)
//     input.value = '';
// }

// database.child('users').on("child_added", function (snapshot) {
//     var demo = snapshot.val()
//     demo.id = snapshot.key

//     var list = document.createElement('LI')
//     var tagText = document.createTextNode(demo.item)
//     list.appendChild(tagText)//<li>getInput</li>
//     list.setAttribute('class','list-group-item')
//     unOrderList.appendChild(list);

//     var dltBtn = document.createElement("BUTTON");
//     var btnTxt = document.createTextNode("delete");
//     dltBtn.appendChild(btnTxt);
//     dltBtn.setAttribute('class','btn btn-danger float-right');
//     dltBtn.onclick = function() {
//         remove();
//     }

//     list.appendChild(dltBtn);
//     function remove(key) {
//         database.child("users/" + key).remove;
//     }


// })



var database = firebase.database().ref("/")
var input = document.getElementById("input");
var list = document.getElementById("list");



function add() {
    var user = {
        name: input.value,
    }
    database.child("users").push(user);
    input.value = '';
}


database.child("users").on("child_added", function (snapshot) {
    var obj = snapshot.val();
    obj.id = snapshot.key;
    render(obj);
})

function render(user) {
    var div = document.createElement("div")
    div.setAttribute('class','input-group')

    var li = document.createElement("LI");
    var text = document.createTextNode(user.name);
    li.appendChild(text);
    li.setAttribute('class','form-control')
    div.setAttribute("id", user.id);

    var deleteBtn = document.createElement("BUTTON");
    var btnText = document.createTextNode("Delete");
    deleteBtn.appendChild(btnText);
    deleteBtn.setAttribute('class', 'btn btn-danger');
    
    var updateBtn = document.createElement('BUTTON');
    var btnText = document.createTextNode('Update');
    updateBtn.appendChild(btnText);
    updateBtn.setAttribute('class', 'btn btn-success');

    var span = document.createElement("SPAN");
    var span2 = document.createElement("SPAN");
    span.setAttribute('class', 'input-group-btn');
    span.appendChild(deleteBtn);
    span2.setAttribute('class', 'input-group-btn');
    span2.appendChild(updateBtn);
    div.appendChild(li);
    div.appendChild(span);
    div.appendChild(span2);
    list.appendChild(div);

    deleteBtn.onclick = function () {
        remove(user.id);
    }
}

function remove(key) {
    database.child("users/" + key).remove();
}
database.child("users").on("child_removed", function (data) {
    var deletedLi = document.getElementById(data.key);
    deletedLi.remove();
})
