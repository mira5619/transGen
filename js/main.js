//TODO
//1.to make it responsive
//3.take it out of bootstrap4
    // -write accordion 

window.onload = init;

function init() {

    var resultOrig = document.querySelector(".resultOrig");
    var resultTransf = document.querySelector(".resultTransf");

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

            
            if(name == "orig"){
                movedBox.style.transformOrigin = val;
                resultOrig.innerHTML =  "transform-origin: " + val + ";";

            } else if (name == 'mult') {
                movedBox.style.transform = val;
                resultTransf.innerHTML = "transform: " + val + ";";

            } else {
                resultTransf.innerHTML = "transform: " + name + "(" + val + ");";
                movedBox.style.transform = name + "(" + val + ")"; 
            }  
        });
    });
}
//reset
function reset() {
    location.reload();
}

