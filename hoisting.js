(function() {
    console.log("run me immediately!");
  })(); // => 'run me immediately!'


  function hoisingVar(){
    var name;
    console.log(name);
  }

  hoisingVar();
