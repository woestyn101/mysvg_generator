// importing Circle class
import {Circle} from './circle.js';

// create test for circle class parameters and properties
test('check Circle class properties and methods', () => {
    // create a new instance of the circle class
    // setting the text, text color and shape color
    var myCircle = new Circle ("rvd", "red", "blue");
    // check if instance of class gets text 
    expect(myCircle.textContent).toEqual("rvd");
    // check if instance of class gets text color
    expect(myCircle.theTextColor).toEqual("red");
    //check if instance class gets shape color
    expect(myCircle.myShapeColor).toEqual("blue");
    // check if correct string is outputted
    expect(myCircle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');   
})