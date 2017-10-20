//Here we will import all our controllers, this way we only need to
//import the controller as a single module, or an explicit constant later!!!
const usersController = require('./users')

//now export those constants as this module!
module.exports = { 
  usersController
}