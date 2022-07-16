function climbTree(treeType, ending) {
    let treeString = "You climbed a ";

    function sayClimbTree() {
      // this inner function has access to the variables in the outer scope
      // in which it was defined - including any defined parameters
      return treeString + treeType;
    }

    return sayClimbTree();
  }

  // We assign the result to a variable
  const sayFunction = climbTree("Pine");

  // So we can call it, and indeed the variables have been saved in the closure
  // and the sayFunction prints out their values.
  console.log(sayFunction); // You climbed a Pine


  function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }

  const add5 = makeAdder(5);

  console.log(add5(2)); // prints 7


  function isPalindrome(string) {
    function reverse() {
      return string
        .split("")
        .reverse()
        .join("");
    }

    return string === reverse();
  }

  console.log(isPalindrome('asdfdsa'));


  function appleTree(){
    let aVariable = "apple";
    function tree(){
      return aVariable
    }
    return tree();
  }

console.log(appleTree())


let groceriesList = function(list){
  let groceries = list;

  function addItem(){
    groceries.push("and ice cream");
  }

  addItem();
  return groceries;
}

console.log(groceriesList(["milk, eggs"]))
