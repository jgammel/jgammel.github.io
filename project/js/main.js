var mic;
var fft;
var div = document.getElementById('output');


function setup() {

  // Create an Audio input
  mic = new p5.AudioIn();
  fft = new p5.FFT();
  
  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
  fft.setInput(mic);
  
}

var spectrum = fft.analyze();

//STATEMENT STARTS HERE//
     
if(spectrum[i] > 0){
  switch(i % 7){
    case 0:
      div.innerHTML += 'red' + '<br/>';
      break;
    case 1:
      div.innerHTML += 'orange' + '<br/>';
       break;
    case 2:
      div.innerHTML += 'yellow' + '<br/>';
      break;
    case 3:
      div.innerHTML += 'green' + '<br/>';
      break;
    case 4:
      div.innerHTML += 'blue' + '<br/>';
      break;
    case 5:
      div.innerHTML += 'violet' + '<br/>';
      break;
    case 6:
      div.innerHTML += 'pink' + '<br/>';
      break;
    default:
      console.log("unknown tone");
     
  }
}

//STATEMENT ENDS HERE//