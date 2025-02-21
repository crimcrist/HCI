// let button = document.getElementById("button")

// button.addEventListener("click",() => {
//    alert ("Button clicked")
// })

let square = document.getElementById("square")
let step = 10

document.addEventListener("keydown", (event) => {
    let pos = square.getBoundingClientRect()
    let top = pos.top
    let left = pos.left

    if (event.key == "ArrowUp"){
        top -= step
    }
    if (event.key == "ArrowRight"){
        left += step
    }
    if (event.key == "ArrowLeft"){
        left -= step
    }
    if (event.key == "ArrowDown"){
        top += step
    }

    square.style.top = top + "px"
    square.style.left = left + "px"
})