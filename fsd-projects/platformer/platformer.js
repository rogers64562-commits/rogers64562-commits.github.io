$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(10, 700, 100, 20, "teal");
createPlatform(200, 600, 100,20 , "teal");
createPlatform(10, 500, 100,20 , "teal");
createPlatform(200, 400, 100,20 , "teal");
createPlatform( 400, 300, 100,20 , "teal");
createPlatform(600, 200, 100,20 , "teal");
createPlatform(800, 300, 100, 20 , "teal");
createPlatform(940, 450, 100, 20 , "teal");
createPlatform(1200, 600, 100, 20 , "teal");
createPlatform(700, 700, 40, 100 , "teal");
createPlatform(600, 700, 40, 100 , "teal");



















    // TODO 3 - Create Collectables
    createCollectable("database", 1100, 700);
createCollectable("max", 200, 170, 0.5, 0.7);
createCollectable("database", 700, 100);





    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 800);
createCannon("right", 300, 2000);
createCannon("bottom", 300, 2000);



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
