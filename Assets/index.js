const inquirer = require('inquirer')
const {Circle, Triangle, Square} = require('./lib/shapes')
const { writeFile } = require("fs/promises");
//
inquirer.prompt(
    [{
        type: "input",
        name: "text",
        message: "what character they want?",
    }, 
        
     {
        name: "color",
        message: "what is the color of your text",
        type: "input"
    },
{
    name:'shape',
    message:"what is the shape",
    type:"list",
    choices:["circle", "triangle", "square"]

},

{
    name: "shapecolor",
    message: "what is the shape color",
    type: "input"
},
]

).then(answer =>{
    let renderedShape;
  console.log(answer)
    if(answer.shape == "circle"){
        let shape = new Circle()
        shape.setColor(answer)
        console.log(shape)
         renderedShape = shape.render()
        console.log(renderedShape)
    }
    else if(answer.shape == "triangle"){
        let shape = new Triangle()
        shape.setColor(answer.shapecolor)
        console.log(shape)
         renderedShape = shape.render()
        console.log(renderedShape)
    }
     else if (answer.shape == "square"){
          let shape = new Square()
          shape.setColor(answer.shapecolor)
          console.log(shape)
         renderedShape = shape.render()
          console.log(renderedShape)
      }
const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${renderedShape}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answer.color}">${answer.text}</text></svg>`
return writeFile("logo.svg", svg);
}
)
.then(() => {
 console.log("Logo created successfully: logo.svg");
  })
  .catch((error) => {
    console.log(error);
    console.log("Oops! There was a problem creating the svg.");
  });
