var users = ["user1","user2","user3","user4"]
var passwords = ["123","132","312","213"]
var totalUsers = 4;

$(document).keypress(function(e) {
  if(e.which == 13) {
    // enter pressed
    validateAll()
  }
});

function validateAll() {

    var inputname
    var password
    var statusSpan = document.getElementById('status')
    var temp = document.getElementById('status-message')
    var found = false
    var userIndex;

    if(document.getElementById("username") !== "")
        inputname = document.getElementById('username').value
    if(document.getElementById("password") !== "")
        password = document.getElementById('password').value

    // SEARCH FOR USER IN USERS LIST
    for(var i = 0; i < totalUsers; i++) {
        if(inputname === users[i]) {
            userIndex = i;
            found = true;
        }
    }
    if(!found) {
        temp.style.color = "#FF3408"
        temp.innerHTML = "wrong username or password..."
        statusSpan.style.display = 'block'
    }
    
    else if(password !== passwords[userIndex]) {
        temp.style.color = "#FF3408"
        temp.innerHTML = "wrong username or password..."
        statusSpan.style.display = 'block'
    }

    else if (found){
        temp.style.color = "#20FF00"
        temp.innerHTML = "Logging you back..."
        setTimeout(window.location.href = "user-work.html",2000);
        statusSpan.style.display = 'block'
    }
}


/*$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});*/