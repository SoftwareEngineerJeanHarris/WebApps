//// This is for demonstration purposes and is not a real application

$(document).ready(function(){
  $('#button1').on('click', ()=> {
    var username = $('#username').val()
    var password = $('#password').val()

    // This selection algorithm will check all of the entries in the clients and
    // return a match if there is one
    // The check variable indicates whether a username-password combination has been found
    var check = false
    for(var i = 0; i < Accounts.length; i++){
      if(Accounts[i].username == username && Accounts[i].password == password){
        // alert('Login Successful for ' + Accounts[i-1].username)
        check = true

        // Redirect to the userpage
        // This is not the way to do this in a real application where you will be passing in arguments that are then ...
        // ... passed into an SQL query which then is passed to the database, which returns the information
        // ***** URL FRAGMENTS *****
        window.location.href = '/account.html'
                                + '#' + i
      }
    }
    if(check == false){
      alert('The username or password entered is incorrect')
    }
  })
})
