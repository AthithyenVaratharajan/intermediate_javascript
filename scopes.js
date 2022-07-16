function outer() {
    let x = 5;

    function inner() {
      // here we know the value of x because scope chaining will
      // go into the scope above this one looking for variable named x.
      // We do not need to run this code in order to determine the value of x!
      console.log(x);
    }
    inner();
  }

outer();
