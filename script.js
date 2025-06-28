// console.log("Lets go go ")
// let sai = document.getElementById("sai")
// sai.innerText=("i am changed do you got it my frd!!!!")
let p = document.querySelectorAll("p")
console.log(p)
p.forEach((p)=>{
    p.style.color="red"
    
}
)
document.getElementsByTagName("div")[0].style.backgroundColor="red"
document.getElementsByTagName("div")[0].style.color="white"

let list = document.createElement("li")
list.innerText=("amma")
console.log(list)

document.getElementsByTagName("li")[0].prepend(list)
let rem=document.getElementById("teja")
rem.remove()

function setValue() {
  document.getElementById("myInput").value = "Hello, KaSai!";
}

