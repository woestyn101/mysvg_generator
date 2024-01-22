// importing Triangle class
import {Triangle} from './triangle.js';

// create test for triangle class parameters and properties
test('check Triangle class properties and methods', () => {
    // create a new instance of the triangle class
    // setting the text, text color and shape color
    var myTriangle = new Triangle ("spt", "orange", "green");
    // check if instance of class gets text 
    expect(myTriangle.textContent).toEqual("spt");
     // check if instance of class gets text color
    expect(myTriangle.theTextColor).toEqual("orange");
    //check if instance class gets shape color
    expect(myTriangle.myShapeColor).toEqual("green");
    // check if correct string is outputted
    expect(myTriangle.render()).toEqual('<polygon points="40 180, 260 180, 150 0" fill="green" />');   
})