import inquirer from 'inquirer';
import * as fs from'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'shape',
        message: "What is the shape?",
        default: ""
    },
    {
        type: 'input',
        name: 'color',
        message: "What is the color?",
        default: ""
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    fs.writeFile('./examples/main.svg', 
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> '
    + 
    '<' + answers.shape +' cx="150" cy="100" r="80" fill="'+ answers.color +  '" />'
    +
    '</svg>'
    
    , err => {
        if (err) {
          console.error(err);
        } else {
          // file written successfully
        }
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });