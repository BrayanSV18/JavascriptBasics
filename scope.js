/*Scope GLOBAL - LOCAL*/

//Global variables are accessible from anywhere in the code.
//Local variables are accesible only inside the function.

var globalVariable = "Global";

function functionName() {
  var localVariable = "Local";

  //Here it returns both varibles
  return globalVariable + localVariable;
}

//Here only return the Local Variable
functionName();
