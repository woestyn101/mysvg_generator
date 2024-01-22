import {Myshape} from './shape.js';



export class Triangle extends Myshape {
       constructor(mytextContent, myTextColor, myShapeColor){
        super(mytextContent, myTextColor, myShapeColor);
         this.triangleTag = '<polygon points="40 180, 260 180, 150 0" fill="'+ this.myShapeColor +'" />'
         }

         render() {
             
              return '<polygon points="40 180, 260 180, 150 0" fill="'+ this.myShapeColor +'" />'
      }
        

 
}







