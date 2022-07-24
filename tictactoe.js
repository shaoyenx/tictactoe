var grids = document.querySelectorAll('.grid')

for (grid of grids) {
    grid.addEventListener("click", changeToX)
}

function changeToX() {
    //console.log(this.innerText == "X")
    if (this.innerText === "O") {
        this.textContent = "";
    } else if (this.innerText === "") {
        this.innerHTML = "<strong> X </strong>"
    } else if (this.innerText == "X") {
        this.innerHTML = "<strong> O </strong>"
    }    
}

var restart = document.querySelector('#restart')

restart.addEventListener("click", clearTTT)

function clearTTT(){
    for (grid of grids) {
        grid.textContent = ""
    }
}
