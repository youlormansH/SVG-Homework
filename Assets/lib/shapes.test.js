const {Circle , Triangle, Square} = require('./shapes')


describe("Circle", ()=>{
test("test render green circle", ()=>{
    const shape = new Circle('green');
    shape.setColor("green");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green"/>');
})

})


//describe 
describe("Triagle", ()=>{
    test("test render green Triangle", ()=>{
        const shape = new Triangle('blue');
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="50 15, 100 100, 0 100" fill="blue"/>');
    })
    
    })
    
    describe("square", ()=>{
        test("test render white circle", ()=>{
            const shape = new Square('white');
            shape.setColor("white");
            expect(shape.render()).toEqual('<rect x="50" y="20" width="150" height="150" fill="white"/>');
        })
        
        })
        