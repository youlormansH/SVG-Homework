const inquirer = require('inquirer')
const {Circle, Triangle, Square} = require('./lib/shapes')
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
  console.log(answer)
    if(answer.shape == "circle"){
        let shape = new Circle()
        shape.setColor("green")
        console.log(shape)
        const renderedShape = shape.render()
        console.log(renderedShape)
    }
}
)

.then(answer =>{
    console.log(answer)
      if(answer.shape == "triangle"){
          let shape = new Triangle()
          shape.setColor("blue")
          console.log(shape)
          const renderedShape = shape.render()
          console.log(renderedShape)
      }
  }
  )
  .then(answer =>{
    console.log(answer)
      if(answer.shape == "square"){
          let shape = new Square()
          shape.setColor("white")
          console.log(shape)
          const renderedShape = shape.render()
          console.log(renderedShape)
      }
  }
  )

