const button = document.querySelector("#button")
const rectangle = document.querySelector("#rectangle")
const modal = document.querySelector("#modal")

let cnt = 1;


button.addEventListener("click", () => {
    cnt++;
    if(cnt % 2 === 0){
        rectangle.classList.remove("hidden")
    }else{
        rectangle.classList.add("hidden")
    }
})