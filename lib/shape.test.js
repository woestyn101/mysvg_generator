// importing Myshape class
import {Myshape} from './shape.js';

// create test for Myshape class  with parameters and properties
test('check Myshape Class  properties', () => {
    // create a new instance of the Myshape class
    // setting the text, text color and shape color
    var newShape = new Myshape ("mno", "green", "yellow");
    // check if instance of class gets text 
    expect(newShape.textContent).toEqual("mno");
     // check if instance of class gets text color
    expect(newShape.theTextColor).toEqual("green");
    //check if instance class gets shape color
    expect(newShape.myShapeColor).toEqual("yellow");
    // check if correct string is outputted
    expect(newShape.theText).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="green">mno</text>');
     
})