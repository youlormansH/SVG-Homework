class Shape{
    constructor(color){
        this.color =color
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
            return `put something here`
        }

    }

    class square extends Shape{
        render(){
            return`here `
        }
    }

    module.exports = {Circle, Triangle, Square};