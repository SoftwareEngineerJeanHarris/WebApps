/*


           ||||||||||||||||||||||||||||||||||||||||||||||||||
           |||                                            |||
           |||   Welcome, this website is property of     |||
           |||   Jean-Michael Harris. Feel free to email  |||
           |||   me at jeanmichael.harris@gmail.com       |||
           |||   You can contact me on 704 626 8078       |||
           |||   and my homepage currently can be found   |||
           |||   at developerharris.glitch.me             |||
           |||                                            |||
           ||||||||||||||||||||||||||||||||||||||||||||||||||


*/

let text = "Developer Harris";
let canvas;
let ctx;
let w, h;
let imageBuffer;
let ticker;

function setup() {
  ticker = 0;
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  reset();
  window.addEventListener("resize", reset);
  document.querySelector("#text").addEventListener("input", input);
}

function reset() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  initBufferFromText();
}

function input(event) {
  text = event.target.value;
  initBufferFromText();
}

function initBufferFromText() {
  clear();
  let fontSize = w * 0.1;
  ctx.font = "bold " + fontSize + "px Arial, Helvetica, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, w / 2, h / 2);
  let image = ctx.getImageData(0, 0, w, h);
  imageBuffer = new Uint32Array(image.data.buffer);
}

function draw() {
  ticker += 1;
  requestAnimationFrame(draw);
  clear();
  drawLines();
}

function clear() {
  ctx.clearRect(0, 0, w, h);
}

function drawLines() {
  let yDistance = 12;
  let yOffset = ticker % yDistance;
  for (let x = 0; x < w; x++) {
    for (let y = yOffset; y < h; y += yDistance) {
      let index = Math.round(y) * w + x;
      let color = imageBuffer[index];
      let height = 1;
      if (color) {
        height = 3;
      }
      ctx.fillRect(x, y, 1, height);
    }
  }
}

setup();
draw();
