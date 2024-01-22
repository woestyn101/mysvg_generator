import inquirer from 'inquirer';
import * as fs from'fs';
import {Myshape} from './lib/shape.js';

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
    var myshape = new Myshape();
    fs.writeFile('./examples/main.svg', myshape.start + '<'+ answers.shapeChoice + ' cx="150" cy="100" r="80" fill="'+ answers.shapeColor +'" />' +
     '<text x="150" y="125" font-size="60" text-anchor="middle" fill="' + answers.textColor + '">'+ answers.text +'</text>'+ myshape.end

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
   
    console.log(myshape.start);
    console.log(myshape.end);

   
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });