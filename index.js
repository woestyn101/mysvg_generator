// importing modules to be used

import inquirer from 'inquirer';
import * as fs from'fs';
import {Myshape} from './lib/shape.js';
// importing shape class
import {Circle} from './lib/circle.js';
// importing Triangle class
import {Triangle} from './lib/triangle.js';
// importing Square class
import {Square} from './lib/square.js';

// using inquirer to prompt questions
inquirer
  .prompt([
   // questions to create svg logo
    {
        type: 'input',
        name: 'text',
        message: "Type in three letters?",
        default: ""
    },
    {
        type: 'input',
        name: 'textColor',
        message: "What text color do you prefer?",
        default: ""
    },
    {
        type: 'list',
        name: 'shapeChoice',
        message: "Choose a shape:",
        choices: ['circle',
             'square', 
            'triangle',
           ],
        default: "circle"
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: "What shape color do you prefer?",
        default: ""
    },
    
  ]) 
  .then((answers) => {
        // checkin which shape the user has chosen

        // check if the user chose circle shape
    if (answers.shapeChoice === "circle"){

      // creating a new instance of the Circle class
      var thecircle = new Circle(answers.text, answers.textColor, answers.shapeColor);

      // using user answers to output svg file
      fs.writeFile('./examples/logo.svg', 
     thecircle.start + thecircle.render() + thecircle.theText + thecircle.end        
      
     // error checking
     , err => {
      if (err) {
        console.error(err);
      } else {
        // outputting to the console if success
       console.log("Generated logo.svg");
      }

    });
      
    // check if user chose triangle
    } else if(answers.shapeChoice === "triangle") {
      // creating a new instance of the the triangle class

      var thetriangle = new Triangle(answers.text, answers.textColor, answers.shapeColor);

    // using user answers to output svg file
     fs.writeFile('./examples/logo.svg', 
     thetriangle.start + thetriangle.render() + thetriangle.theText + thetriangle.end   

     // error checking 
     , err => {
      if (err) {
        console.error(err);
      } else {
        // outputting to the console if success
        console.log("Generated logo.svg");
      }

    });
   // if circle or triangle not chosen, square will be written
    } else {
      // creating a new instance of the Square class
      var thesquare = new Square(answers.text, answers.textColor, answers.shapeColor);

   // using user answers to output svg file
     fs.writeFile('./examples/logo.svg', 
     thesquare.start + thesquare.render()  + thesquare.theText + thesquare.end       

     // error checking 
     , err => {
      if (err) {
        console.error(err);
      } else {

        // outputting to the console if success
        console.log("Generated logo.svg");
      }

    });
    
    }


  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      console.log("error getting user answers");
    }
  });
  
     
    
   
