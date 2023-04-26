const {Circle , Triangle} = require('./shapes')
describe("Circle", ()=>{
test("test render circle", ()=>{


    const shape = new Circle('blue');
    //shape.setColor("blue");
    expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="blue"/>');
})

})


//describe 