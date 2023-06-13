class SVG {
    constructor() {
        this.text = "";
        this.shape = "";
        this.shapeColor = "";
    }
    render() {
        return `<svg version="1.1" width="330" height="230" xmlns="http://www.w3.org/2000/svg">
      ${this.shapeColor} ${this.shape} ${this.text} </svg>`
    }
    setText(userText, textColor) {
        if (userText.length > 3) {
            throw TypeError("UNKNOWN ERROR");
        } else if (!userText) {
            throw TypeError("UNKNOWN ERROR");
        }
        this.text = `<text x="155" y="125" font-size="50" text-anchor="middle" fill="${textColor}">
        ${userText} </text>`
    }
    setShape(userShape) {
        this.shape = userShape.render()
    }
}

module.exports = SVG