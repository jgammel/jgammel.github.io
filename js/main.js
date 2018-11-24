var mic;
var fft;

function setup() {
  createCanvas(710, 200);

  // Create an Audio input
  mic = new p5.AudioIn();
  fft = new p5.FFT();
  
  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
  fft.setInput(mic);
}

// function draw() {
//   background(200);

//   // Get the overall volume (between 0 and 1.0)
//   var vol = mic.getLevel();
//   fill(127);
//   stroke(0);

//   // Draw an ellipse with height based on volume
//   var h = map(vol, 0, 1, height, 0);
//   ellipse(width/2, h - 25, 50, 50);
// }

function draw() {
   background(200);

   var spectrum = fft.analyze();

   beginShape();
  
   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0) );
     
     //STATEMENT STARTS HERE//
     
     if(spectrum[i] > 0){
      switch(i % 7){
        case 0:
          console.log("red");
          break;
        case 1:
          console.log("orange");
           break;
        case 2:
          console.log("yellow");
          break;
        case 3:
          console.log("green");
          break;
        case 4:
          console.log("blue");
          break;
        case 5:
          console.log("violet");
          break;
        case 6:
          console.log("pink");
          break;
        default:
          console.log("unknown tone");
         
      }
     }
     
     //STATEMENT ENDS HERE//
     
   }
  
   endShape();
}