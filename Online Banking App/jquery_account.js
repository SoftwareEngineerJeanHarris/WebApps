//// This is for demonstration purposes and is not a real application

$(document).ready(function(){
  // This is how you extract the information from the URL FRAGMENT
  var id = window.location.hash.substring(1)

  // Default layout

  $('#p-username').html('User: ' + Accounts[id].username)
  $('#p-firstname').html('First Name: ' + Names[id].getName(0))
  $('#p-lastname').html('Last Name: ' + Names[id].getName(1))
  $('#p-home').html('Home Address: ' + Addresses[id].getHome())
  $('#p-country').html('Country: ' + Addresses[id].getCountry())
  $('#p-state').html('State: ' + Addresses[id].getState())
  $('#p-city').html('City: ' + Addresses[id].getCity())
  
  $('#h3-balance').html('Balance: $' + Accounts[id].balance)

  // Code for the deposit feature
  // The val variable is used to toggle the visibility of the input box for the user
  var val = 0
  $('#button-deposit').on('click', ()=> {
    if(val == 1){
      var amount = $('#input-amount').val()
      if(parseInt(amount) == 0 || amount == ''){
        alert('No amount entered to deposit!')
        // Hide the input again
        $('#input-amount').css('visibility', 'hidden')
      }
      else{
        // Update the amount in the 'database'
        Accounts[id].deposit(amount)
        // Update the displayed HTML
        $('#h3-balance').html('Balance: $' + Accounts[id].balance)
        // Alert the user of the successful operation
        alert('$' + amount + ' deposited')
        // Resest the textarea
        $('#input-amount').val('')
        // Hide the input again
        $('#input-amount').css('visibility', 'hidden')
      }
      val = val - 1
    }
    else if(val == 0){
      $('#input-amount').css('visibility', 'visible')
      val = val + 1
    }
  })

  // Code for the withdrawl feature
  $('#button-withdrawl').on('click', ()=> {
    if(val == 1){
      var amount = $('#input-amount').val()
      if(parseInt(amount) == 0 || amount == ''){
        alert('No amount entered to withdrawl!')
        // Hide the input again
        $('#input-amount').css('visibility', 'hidden')
      }
      else{
        // Update the amount in the 'database'
        Accounts[id].withdrawl(amount)
        // Update the displayed HTML
        $('#h3-balance').html('Balance: $' + Accounts[id].balance)
        // Alert the user of the successful operation
        alert('$' + amount + ' withdrawn')
        // Resest the textarea
        $('#input-amount').val('')
        // Hide the input again
        $('#input-amount').css('visibility', 'hidden')
      }
        val = val - 1
    }
    else if(val == 0){
      $('#input-amount').css('visibility', 'visible')
      val = val + 1
    }
  })

  // Code to Logout
  $('#button-logout').on('click', ()=> {
    window.location.href = '/index.html'
  })
})
