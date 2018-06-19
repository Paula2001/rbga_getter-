
class ColorBox { //color area class
    constructor(){
        this.box = document.getElementById("color") ;
        this.color = window.getComputedStyle(document.getElementById("color")).getPropertyValue("background-color");


    }
    get(event) {
        let coordinets = event.clientY ;
        console.log(coordinets / 10)
        this.box.style.backgroundColor = coordinets / 2 ,200 ,64, 64;
    }
}
class Slider extends ColorBox { //slider class
    constructor(){
        super();
        this.r = document.getElementById("r");
        this.b = document.getElementById("b");
        this.g = document.getElementById("g");
        this.a = document.getElementById("a");

    }
    getValue(){
        this.box.style.backgroundColor = "rgba(" + [this.r.value,this.b.value,this.g.value,this.a.value].join(',') +")";


    }
   /* getValue(ele){
        this.element = document.getElementById(`${ele}`);
        console.log(this.element.value);
        if (ele === "r") {}
        this.box.style.backgroundColor = "rgba(" + [this.element.value,this.element.value,100,2].join(',') +")";

    }*/
}
let slide = new Slider();
let box = new ColorBox();



