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

const config = {
  text: "DeveloperHarris",
  gravity: 30
};

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let points;
let w, h;
let particles;
let planet;

function setup() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  window.addEventListener("resize", reset);
  canvas.addEventListener("mousemove", mousemove);
  reset();
}

function reset() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  drawText();
}

function drawText() {
  ctx.save();
  let fontSize = w * 0.1;
  ctx.font = "bold " + fontSize + "px Arial, Helvetica, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "purple";
  ctx.shadowColor = "#445";
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 5;
  ctx.shadowBlur = 5;
  ctx.fillText(config.text, w / 2, h / 2);
  ctx.restore();
  let image = ctx.getImageData(0, 0, w, h);
  let buffer32 = new Uint32Array(image.data.buffer);

  planet = new Planet(0, 0, config.gravity);
  particles = [];

  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      let index = y * w + x;
      let color = buffer32[index];
      if (color) {
        let particle = new Particle(x, y, x, y, color);
        particles.push(particle);
      }
    }
  }
  clear();
}

function mousemove(event) {
  let x = event.clientX;
  let y = event.clientY;
  planet.pos.x = x;
  planet.pos.y = y;
}

function clear() {
  ctx.clearRect(0, 0, w, h);
}

function draw() {
  clear();
  requestAnimationFrame(draw);

  let image = ctx.createImageData(w, h);
  let pixels = new Uint32Array(image.data.buffer);

  particles.forEach(p => {
    p.applyForceFromPlanet(planet);
    p.move();
    let x = Math.round(p.pos.x);
    let y = Math.round(p.pos.y);
    if (x >= 0 && x < w && y >= 0 && y < h) {
      pixels[x + w * y] = p.color;
    }
  });

  ctx.putImageData(image, 0, 0);
}

setup();
draw();
