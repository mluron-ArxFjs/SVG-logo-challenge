// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Importing classes from ./lib/shapes and  svgdirectory
const { Triangle, Square, Circle } = require("./lib/shapes");
const SVG = require("./lib/svg");

// This function uses inquirer to prompt the user to answer questions in the command line and save user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Please enter text for the logo (Maximum 3 characters)',
    },
    {
      type: 'list',
      name: 'textColor',
      message: `Please select text color keyword for the logo's text color`,
      choices: ['blue', 'green', 'yellow', 'red', 'pink', 'orange', 'brown', 'purple'],
    },
    {
      type: 'list',
      name: 'shape',
      message: `Please select logo shape`,
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'list',
      name: 'shapeColor',
      message: `Please enter a color keyword for the logo's background (shape) color`,
      choices: ['blue', 'green', 'yellow', 'red', 'pink', 'orange', 'brown', 'purple'],
    },
  ])
  .then((response) => {
    //the response parameter is taking data from the prompts response
    
    let shape;
    if (response.shape.toLowerCase() === "circle") {
        shape = new Circle()
    }
    if (response.shape.toLowerCase() === "square") {
        shape = new Square()
    }
    if (response.shape.toLowerCase() === "triangle") {
        shape = new Triangle()
    }
    //setColor() takes in the response from the prompt of shapeColor and apply color of logo
    shape.setColor(response.shapeColor)

    //new SVG() is used to update class SVG based on the response from the prompts
    const Svg = new SVG()
    
    //response.text and response.textColor will be applied
    Svg.setText(response.text, response.textColor)
    Svg.setShape(shape)

    fs.writeFileSync("logo.svg", Svg.render())
  });

