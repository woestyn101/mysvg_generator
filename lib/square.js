// importing Myshape class
import {Myshape} from './shape.js';

// creating Square class and export to be used in indes.js

export class Square extends Myshape {
       constructor(mytextContent, myTextColor, myShapeColor){
               // inheriting from the parent class Myshape
        super(mytextContent, myTextColor, myShapeColor);
              
                }
// outputting user answers to create square with color choice
       render() {
             
              return '<rect x="70" y="30" width="150" height="150" style="fill:' + this.myShapeColor + '"/>';
      }

        

 
}






