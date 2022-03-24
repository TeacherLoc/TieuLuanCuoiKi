const onbar = document.querySelector(".on-bar")
onbar.addEventListener("click",function(){

 onbar.classList.toggle("active")
 document.querySelector(".menu-home").classList.toggle("active")
        
})
const toP = document.querySelector(".top")
window.addEventListener("scroll-x",function(){
    const x = this.pageXOffset;
    if(x>80){toP.classList.add("active")}
    else{toP.classList.remove("active")}
})