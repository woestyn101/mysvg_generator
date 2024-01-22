import {Circle} from './circle.js';


test('check myClass circle properties', () => {
    var myCircle = new Circle ("rvd", "red", "blue");
    expect(myCircle.textContent).toEqual("rvd");
    expect(myCircle.theTextColor).toEqual("red");
    expect(myCircle.myShapeColor).toEqual("blue");
    expect(myCircle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');   
})