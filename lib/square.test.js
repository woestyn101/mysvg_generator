// importing Square class
import {Square} from './square.js';

// create test for Square class parameters and properties
test('check Square class properties and methods', () => {
    // create a new instance of the Square class
    // setting the text, text color and shape color
    var mySquare = new Square ("tri", "yellow", "red");
    // check if instance of class gets text 
    expect(mySquare.textContent).toEqual("tri");
    // check if instance of class gets text color
    expect(mySquare.theTextColor).toEqual("yellow");
    //check if instance class gets shape color
    expect(mySquare.myShapeColor).toEqual("red");
    // check if correct string is outputted
    expect(mySquare.render()).toEqual('<rect x="70" y="30" width="150" height="150" style="fill:red"/>');   
})