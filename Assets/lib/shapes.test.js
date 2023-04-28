const {Circle , Triangle, Square} = require('./shapes')


describe("Circle", ()=>{
test("test render green circle", ()=>{
    const shape = new Circle('green');
    shape.setColor("green");
    expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="green"/>');
})

})


//describe 
describe("Triagle", ()=>{
    test("test render green Triangle", ()=>{
        const shape = new Triangle('blue');
        shape.setColor("blue");
        expect(shape.render()).toEqual('<triagle cx="25" cy="75" r="20" fill="blue"/>"/>');
    })
    
    })
    
    describe("square", ()=>{
        test("test render white circle", ()=>{
            const shape = new Square('white');
            shape.setColor("white");
            expect(shape.render()).toEqual('<square cx="25" cy="75" r="20" fill="green"/>');
        })
        
        })
        