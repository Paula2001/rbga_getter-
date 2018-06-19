
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
    createDivs(){
        for (let x = 0; x < 4; x++) {
            var create = document.createElement("input");
            create.type = "range";
            create.className = "color";
            this.container.appendChild(create);
        }
        this.slide = document.getElementsByClassName("color");
        for(let x = 0; x < 3; x++){
            slide.slide[x].max = 255 ;
        }
        slide.slide[3].max = 1;
        slide.slide[3].min = 0;
        slide.slide[3].step = 0.1;
    }
    getValue(){
        let arr = new Array();

        for(let x = 0; x < this.slide.length ; x++) {
            arr.push(this.slide[x].value);
        }
        console.log("developed : by Paula George")
        this.box.style.backgroundColor = "rgba(" + arr.join(',') + ")";
        document.getElementById("color_holder").innerHTML = `background-color: rgba(${arr.join(" , ")}); `;

    }


}
let slide = new Slider();
let box = new ColorBox();
slide.createDivs();
slide.getValue() ;
slide.slide[0].oninput = () => slide.getValue() ;
slide.slide[1].oninput = () => slide.getValue() ;
slide.slide[2].oninput = () => slide.getValue() ;
slide.slide[3].oninput = () => slide.getValue() ;



