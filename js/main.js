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

function draw() {
   background(300);

   var spectrum = fft.analyze();

   beginShape();
  
   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0) );
     
     //STATEMENT STARTS HERE//
     
     if(spectrum[i] > 0){
      switch(i % 7){
        case 0:
          background(255,0,0);
          break;
        case 1:
          background(255,115,62);
           break;
        case 2:
          background(255,214,62);
          break;
        case 3:
          background(0,220,62);
          break;
        case 4:
          background(0,148,234);
          break;
        case 5:
          background(108,0,234);
          break;
        case 6:
          background(255,108,234);
          break;
        default:
          console.log("unknown tone");
         
      }
     }
     
     //STATEMENT ENDS HERE//
     
   }
  
   endShape();
}