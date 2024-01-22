import {Square} from './square.js';


test('check myClass circle properties', () => {
    var mySquare = new Square ("tri", "yellow", "red");
    expect(mySquare.textContent).toEqual("tri");
    expect(mySquare.theTextColor).toEqual("yellow");
    expect(mySquare.myShapeColor).toEqual("red");
    expect(mySquare.render()).toEqual('<rect x="70" y="30" width="150" height="150" style="fill:red"/>');   
})