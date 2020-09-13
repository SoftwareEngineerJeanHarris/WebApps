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

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    return new Vector(this.x + v.x, this.y + v.y);
  }

  addTo(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  sub(v) {
    return new Vector(this.x - v.x, this.y - v.y);
  }

  subFrom(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  mult(n) {
    return new Vector(this.x * n, this.y * n);
  }

  multTo(n) {
    this.x *= n;
    this.y *= n;
    return this;
  }

  div(n) {
    return new Vector(this.x / n, this.y / n);
  }

  setAngle(angle) {
    var length = this.getLength();
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
  }

  setLength(length) {
    var angle = this.getAngle();
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
  }

  getAngle() {
    return Math.atan2(this.y, this.x);
  }

  getLength() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  distanceTo(otherVector) {
    return this.sub(otherVector).getLength();
  }
}
