import {Myshape} from './shape.js';


test('check Myshape Class  properties', () => {
    var newShape = new Myshape ("mno", "green", "yellow");
    expect(newShape.textContent).toEqual("mno");
    expect(newShape.theTextColor).toEqual("green");
    expect(newShape.myShapeColor).toEqual("yellow");
     
})