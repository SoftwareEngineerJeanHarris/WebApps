// This is the where all of the database information is
// Th is is for demonstration purposes, because any changes to this information
// won't be saved accross page loads, but can be used to demonstrate functionality
// within a page

// Person's name, will have to have a leas t a first and a last name
// That's what the default arguments are for the class below
function Name(first_name, last_name){
  this.name = [first_name, last_name]
}
// Prototype functions in JavaScript is similar to Method functions in Java or C++
Name.prototype.getName = function(i){
  return this.name[i]
}
// Assume this is an US bank account
function Address(home, country, state, city){
  this.home = home
  this.country = country
  this.state = state
  this.city = city
}
Address.prototype.getHome = function(){
  return this.home
}
Address.prototype.getCountry = function(){
  return this.country
}
Address.prototype.getState = function(){
  return this.state
}
Address.prototype.getCity = function(){
  return this.city
}
// This is the super type, the one that aggregates the above and
// is the summary of the account
function Account(username, password, name, address, balance, pending){
  this.username = username
  this.password = password
  this.name = name
  this.address = address
  this.balance = balance
  this.pending = pending
}
Account.prototype.deposit = function(amount){
  this.balance += parseFloat(amount)
}
Account.prototype.withdrawl = function(amount){
  this.balance -= parseFloat(amount)
}

// Here is all of the client data
// Names
var Names = []
Names[0] = new Name('Frank', 'Jones')
Names[1] = new Name('Ron', 'Harrison')
Names[2] = new Name('James', 'Carriker')
Names[3] = new Name('Bob', 'Crump')
Names[4] = new Name('John', 'Medlin')
Names[5] = new Name('Tom', 'Smith')
Names[6] = new Name('Rob', 'Almond')
Names[7] = new Name('Jim', 'Jackson')

// Addresses
var Addresses = []
Addresses[0] = new Address('123 Here Street', 'USA', 'NC', 'Aoville')
Addresses[1] = new Address('345 Here Street', 'USA', 'Va', 'Boville')
Addresses[2] = new Address('678 Here Street', 'USA', 'NY', 'Coville')
Addresses[3] = new Address('910 Here Street', 'USA', 'MA', 'Doville')
Addresses[4] = new Address('1112 Here Street', 'USA', 'PA', 'Eoville')
Addresses[5] = new Address('1314 Here Street', 'USA', 'SC', 'Foville')
Addresses[6] = new Address('1516 Here Street', 'USA', 'CA', 'Goville')
Addresses[7] = new Address('1718 Here Street', 'USA', 'SD', 'Hoville')

// Accounts
var Accounts = []
Accounts[0] = new Account('User0', 'password0', Names[0], Addresses[0], 36001.01)
Accounts[1] = new Account('User1', 'password1', Names[1], Addresses[1], 500.01)
Accounts[2] = new Account('User2', 'password2', Names[2], Addresses[2], 285.01)
Accounts[3] = new Account('User3', 'password3', Names[3], Addresses[3], 851.01)
Accounts[4] = new Account('User4', 'password4', Names[4], Addresses[4], 7822.01)
Accounts[5] = new Account('User5', 'password5', Names[5], Addresses[5], 305.01)
Accounts[6] = new Account('User6', 'password6', Names[6], Addresses[6], 5020.01)
Accounts[7] = new Account('User7', 'password7', Names[7], Addresses[7], 168.50)
