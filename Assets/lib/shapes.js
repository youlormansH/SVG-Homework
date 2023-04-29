class Shape{
    constructor(color){
        this.color =color
    }
    setColor(color) {
        this.color = color

    }
    }
    
    class Circle extends Shape{
    render(){
        return `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`
    }
    }

    //class Triangle extends 
    class Triangle extends Shape{
        render(){
            return `<polygon points="50 15, 100 100, 0 100" fill="${this.color}/>;`
        }

    }

    class Square extends Shape{
        render(){
            return`<rect x="50" y="20" width="150" height="150" fill="${this.color}/>; `
        }
    }

    module.exports = {Circle, Triangle, Square};