import {Triangle} from './triangle.js';


test('check myClass circle properties', () => {
    var myTriangle = new Triangle ("spt", "orange", "green");
    expect(myTriangle.textContent).toEqual("spt");
    expect(myTriangle.theTextColor).toEqual("orange");
    expect(myTriangle.myShapeColor).toEqual("green");
    expect(myTriangle.render()).toEqual('<polygon points="40 180, 260 180, 150 0" fill="green" />');   
})