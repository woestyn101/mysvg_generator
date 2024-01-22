import inquirer from 'inquirer';
import * as fs from'fs';
import {Myshape} from './lib/shape.js';
import {Circle} from './lib/circle.js';


inquirer
  .prompt([
    /* Pass your questions in here */
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
    // Use user feedback for... whatever!!
     var thecircle = new Circle(answers.text, answers.textColor, answers.shapeColor);
     
     fs.writeFile('./examples/main.svg', 
     thecircle.start + thecircle.circleTag + thecircle.theText + thecircle.end    
     
     
     , err => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    });
    console.log(answers.text);
    console.log(answers.textColor);
    console.log(answers.shapeChoice);
    console.log(answers.shapeColor);
    console.log(thecircle.start);
    console.log(thecircle.end);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  
     
    
   
