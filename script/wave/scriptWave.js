//variable "pageWidth" from script.js

let instance = new SiriWave({
 container: document.getElementById('wave'),
 width: pageWidth,
 height: 100,
 style: 'ios9',

 curveDefinition: [
 {
 color: "255,255,255",
 supportLine: true,
 },
 {
 color: "15, 82, 169",
 },
 {
 color: "173, 57, 76",
 },
 {
 color: "48, 220, 155",
 }],

 // ratio of the display
 ratio: 1,

 // animation speed
 speed: 0.2, 

 // amplitude
 amplitude: 1, 

 // frequency (iOS style only)
 frequency: 6, 

 // curve color (iOS style only)
 color: "#fff", 

 // make the canvas cover the entire width or height of the container
 cover: false,

 // auto start on init
 autostart: true, 

 // number of step (in pixels) used when drawed on canvas
 pixelDepth: 0.02, 

 // lerp speed to interpolate properties
 lerpSpeed: 0.1
});

// start the animation
instance.start();

// stop the animation
//instance.stop();

// set animation speed
instance.setSpeed(0.05);

// set amplitude
instance.setAmplitude(1.5);

// destroy the instance
//instance.dispose();