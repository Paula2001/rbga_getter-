
function Canvas(){
    this.color = window.getComputedStyle(document.getElementById("color")).getPropertyValue("background-color");
    this.box = document.getElementById("color") ;
    this.get = function(event){
        let coordinets = event.clientY ;
        console.log(coordinets / 10)
        this.box.style.backgroundColor = coordinets / 2 ,200 ,64, 64;
    }



};
let can = new Canvas();



