// importing Myshape class

import {Myshape} from './shape.js';


// creating Circle class and export to be used in indes.js

export class Circle extends Myshape {
       constructor(mytextContent, myTextColor, myShapeColor) {
        // inheriting from the parent class Myshape
        super(mytextContent, myTextColor, myShapeColor);
           
       }
       // outputting user answers to create circle with color choice
       render() {
             
               return '<circle cx="150" cy="100" r="80" fill="'+ this.myShapeColor +'" />';
       }      
        

 
}







