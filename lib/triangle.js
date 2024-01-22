// importing Myshape class
import {Myshape} from './shape.js';


// creating Triangle class and export to be used in indes.js
export class Triangle extends Myshape {
       constructor(mytextContent, myTextColor, myShapeColor){
              // inheriting from the parent class Myshape
        super(mytextContent, myTextColor, myShapeColor);
        
         }
// outputting user answers to create circle with color choice
         render() {
             
              return '<polygon points="40 180, 260 180, 150 0" fill="'+ this.myShapeColor +'" />'
      }
        

 
}







