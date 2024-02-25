//types of errors

// SyntaxError
// EvalError
// Range
// ReferenceError
TypeError
URIError

class Odd extends Error
{
  constructor(varname = ""){
    super(varname + "must be even")


  }

  get name () {
    return "OddErro"
  }
}

const t = new Odd ("amount must be even")
function dotask (amount) {
  if(typeof amount !== "number"){
    throw new TypeError('amount is noe a number')
  }

  if(amount % 2){
    const err = Error ("amount must be 0")
    err.code = "ERR_MUST Be EVEN"
    //this
    throw err
  }

  if(amount % 2)  throw new Odd ("amount")

  return amount / 2

}

//a constructor is what initialises the value of the variable new
//checking with the try and catch method.

dotask ("8")
