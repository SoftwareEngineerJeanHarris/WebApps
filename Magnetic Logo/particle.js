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

class Particle {
  constructor(destx, desty, x, y, color) {
    this.dest = new Vector(destx, desty);
    this.pos = new Vector(x, y);
    this.temp = new Vector(0, 0);
    this.v = new Vector(Math.random(), Math.random());
    this.pinned = false;
    this.color = color;
  }

  move() {
    if (!this.pinned) {
      this.applySpringForce();
      this.v.multTo(0.96);
      this.pos.addTo(this.v);
    }
  }

  // Hooke's law
  applySpringForce() {
    // Trying to minimize the number of objects created by
    // re-using this.temp and chaining the calls
    this.temp.x = 0;
    this.temp.y = 0;
    this.v.addTo(
      this.temp
        .addTo(this.dest)
        .subFrom(this.pos)
        .multTo(0.005)
    );
  }

  applyForceFromPlanet(planet) {
    // Trying to minimize the number of objects created by
    // re-using this.temp and chaining the calls
    this.temp.x = 0;
    this.temp.y = 0;
    this.temp.addTo(this.pos).subFrom(planet.pos);
    let length = this.temp.getLength();
    let g = (planet.g * planet.g) / (length * length);
    //if(g > 40) {
    //  g = 40;
    //}
    // We keep the angle of the distance
    this.temp.setLength(g);
    this.v.addTo(this.temp);
  }
}
