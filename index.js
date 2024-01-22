import inquirer from 'inquirer';
import * as fs from'fs';
import {Myshape} from './lib/shape.js';
import {Circle} from './lib/circle.js';
import {Triangle} from './lib/triangle.js';
import {Square} from './lib/square.js';


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
    {
      type: 'input',
      name: 'fileName',
      message: "Type a filename:",
      default: ""
  },
  ]) 
  .then((answers) => {
    // Use user feedback for... whatever!!
    
    if (answers.shapeChoice === "circle"){
      var thecircle = new Circle(answers.text, answers.textColor, answers.shapeColor);

      console.log(thecircle.render());


     fs.writeFile('./examples/'+ answers.fileName +'.svg', 
     thecircle.start + thecircle.render() + thecircle.theText + thecircle.end        
     
     , err => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }

    });
      
    } else if(answers.shapeChoice === "triangle") {
      var thetriangle = new Triangle(answers.text, answers.textColor, answers.shapeColor);


     fs.writeFile('./examples/'+ answers.fileName +'.svg', 
     thetriangle.start + thetriangle.render() + thetriangle.theText + thetriangle.end     
     , err => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }

    });

    } else {
      var thesquare = new Square(answers.text, answers.textColor, answers.shapeColor);


     fs.writeFile('./examples/'+ answers.fileName +'.svg', 
     thesquare.start + thesquare.render()  + thesquare.theText + thesquare.end        
     
     , err => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }

    });
    
    }


    
     
     
    console.log(answers.text);
    console.log(answers.textColor);
    console.log(answers.shapeChoice);
    console.log(answers.shapeColor);
    console.log(thesquare.start);
    console.log(thesquare.end);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  
     
    
   
