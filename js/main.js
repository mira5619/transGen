//TODO
//1.to make it responsive
//3.take it out of bootstrap4
    // -write accordion 

window.onload = init;

function init() {

    var result = document.querySelector(".result");
    var movedBox = document.querySelector(".movedBox");

    var resetBtn = document.querySelector(".reset");
    resetBtn.addEventListener("click", reset);

    var arrInputs = document.querySelectorAll("input");
    arrInputs.forEach(function(currentItem){
        this.addEventListener("click", function(event){
        currentItem.value= "";
        });
    });


    arrInputs.forEach(function(currentItem){
        this.addEventListener("input", function(event){
            var name = event.target["id"];
            var val = event.target.value;

            if(name == 'mult'){
                movedBox.style.transform = val;
                result.innerHTML = "transform: " + val + ";";
            } else if(name == "orig"){
                movedBox.style.transform = "rotate(45deg)";
                movedBox.style.transformOrigin = val;
               
                result.innerHTML = "transform: " + val + ";";
                result.innerHTML = "transform: rotate(45deg); transform-origin: " + val + ";";

            } else {
                result.innerHTML = "transform: " + name + "(" + val + ");";
                movedBox.style.transform = name + "(" + val + ")"; 
            }  
        });
    });
}
//reset
function reset() {
    location.reload();
}

