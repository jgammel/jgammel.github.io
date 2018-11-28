var mic;
var fft;
var led_R;
var led_O;
var led_Y;
var led_G;
var led_B;
var led_V;
var led_P;

function setup() {
  createCanvas(700, 700);


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
  

  // led_R = rect(0, 0, 100, 100);
  // led_O = rect(100, 0, 100, 100);
  // led_Y = rect(200, 0, 100, 100);
  // led_G = rect(300, 0, 100, 100);
  // led_B = rect(400, 0, 100, 100);
  // led_V = rect(500, 0, 100, 100);
  // led_P = rect(600, 0, 100, 100);

   var spectrum = fft.analyze();

  //beginShape();

   var largestHz = spectrum.indexOf(Math.max.apply(Math, spectrum)); // clearest frequency picked up by the microphone


     //STATEMENT STARTS HERE//

    if(largestHz % 7 == 0){
    	fill(255,0,0);
    	rect(0, 0, 100, 100);
	}
    else if(largestHz % 6 == 0){
    	fill(255,135,55);
    	rect(100, 0, 100, 100);
    }
    else if(largestHz % 5 == 0){
        fill(255,214,62);
        rect(200, 0, 100, 100);
    }
    else if(largestHz % 4 == 0){
        fill(0,220,62);
        rect(300, 0, 100, 100);
    }
    else if(largestHz % 3 == 0){
        fill(0,148,234);
        rect(400, 0, 100, 100);
    }
    else if(largestHz % 2 == 0){
        fill(108,0,234);
        rect(500, 0, 100, 100);
    }
    else {
        fill(255,108,234);
        rect(600, 0, 100, 100);
    }

     
     //STATEMENT ENDS HERE//
     
  
   //endShape();
}