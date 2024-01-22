export class Myshape {
           constructor(mytextContent, myTextColor) {
            this.start = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
            this.end = '</svg>';
            this.textContent = mytextContent;
            this.theTextColor = myTextColor;
            this.theText = '<text x="150" y="125" font-size="60" text-anchor="middle" fill="'+ this.theTextColor+'">'+ this.textContent+ '</text>'
            
           }
           
               

    }
    
       
