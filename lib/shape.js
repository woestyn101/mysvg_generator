// creating a MyShape class and exporting 
// it to be used in circle, triangel and square class

export class Myshape {
          // setting constructor parameters
           constructor(mytextContent, myTextColor, myShapeColor) {
              // creating svg syntax beginning tag
            this.start = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
            // creating svg ending tag
            this.end = '</svg>';
            // getting user text content
            this.textContent = mytextContent;
            // getting user textcolor
            this.theTextColor = myTextColor;
            // outputting text with user options in a string
            this.theText = '<text x="150" y="125" font-size="60" text-anchor="middle" fill="'+ this.theTextColor+'">'+ this.textContent+ '</text>'
            // getting user color choice
            this.myShapeColor = myShapeColor;
            
           }
           
               

    }

    
    