const {Circle , Triangle, square} = require('./shapes')


describe("Circle", ()=>{
test("test render green circle", ()=>{
    const shape = new Circle('green');
    shape.setColor("green");
    expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="green"/>');
})

})


//describe 
describe("triagle", ()=>{
    test("test render green triangle", ()=>{
        const shape = new Circle('blue');
        shape.setColor("blue");
        expect(shape.render()).toEqual('put somthing here  "/>');
    })
    
    })
    
