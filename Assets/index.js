const inquirer = require('inquirer')
const Circle = require('./lib/shapes')

inquirer.prompt(
    [{
        name: "color",
        message: "what is the color of your shape",
        type: "input"
    },
{
    name:'shape',
    message:"what is the sahpe",
    type:"list",
    choices:["circule", "triangel", "scquare"]


}]
).then(answer =>{
    if(answer.shape == "circle"){
        let shape = new Circle(answer.color)
        console.log(shape)
        const renderedShape = shape.render()
        console.log(renderedShape)
    }
}
    
)