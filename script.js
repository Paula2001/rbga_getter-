
class ColorBox { //color area class
    constructor(){
        this.box = document.getElementById("color") ;
        this.color = window.getComputedStyle(document.getElementById("color")).getPropertyValue("background-color");
        this.container = document.getElementById("color_container");
    }
}
class Slider extends ColorBox { //slider class
    constructor(){
        super();

    }
    createDiv(){
        for (let x = 0; x < 4; x++) {
            var create = document.createElement("input");
            create.type = "range";
            create.className = "color";
            this.container.appendChild(create);
        }
    }
    getValue(){
        let arr = new Array();
        this.slide = document.getElementsByClassName("color");
        for(let x = 0; x < 4 ; x++) {
            arr.push(this.slide[x].value);
        }
        this.box.style.backgroundColor = "rgba(" + arr.join(',') + ")";
        console.log(arr);
    }


}
let slide = new Slider();
let box = new ColorBox();
slide.createDiv();
slide.getValue() ;





