import {Myshape} from './shape.js';



export class Square extends Myshape {
       constructor(mytextContent, myTextColor, myShapeColor){
        super(mytextContent, myTextColor, myShapeColor);
               this.squareTag = '<rect x="70" y="30" width="150" height="150" style="fill:' + this.myShapeColor + '"/>';
                }

       render() {
             
              return '<rect x="70" y="30" width="150" height="150" style="fill:' + this.myShapeColor + '"/>';
      }

        

 
}






