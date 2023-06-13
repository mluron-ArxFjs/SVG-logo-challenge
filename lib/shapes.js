class ShapeContent {
  constructor() {
      this.color ="";
  }
  setColor(color) {
      this.color = color;
  }
}

class Triangle extends ShapeContent {
  render() {
      return `<polygon points="165, 12 265, 185 52, 185" fill="${this.color}"/>`
  }
}

class Circle extends ShapeContent {
  render() {
      return `<circle cx="160" cy="100" r="80" fill="${this.color}"/>`
  }
}

class Square extends ShapeContent {
  render() {
      return `<rect x="90" y="40" width="140" height="140" fill="${this.color}"/>`
  }
}

module.exports = {Circle, Triangle, Square};