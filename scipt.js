let btn = document.querySelector(".btn")
btn.addEventListener("mousemove",function(){
    btn.style.backgroundColor = "white"
    btn.style.color = "black"
    btn.style.border = "1px solid black"

})
btn.addEventListener("mouseout",function(){
    btn.style.backgroundColor = "black"
    btn.style.color = "white"
    btn.style.border = "1px solid white"
})
// .document .btn:hover{
//     border: 1px solid black;
//     background-color: white;
//     color: black;
// }