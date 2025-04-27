var paras1 = document.querySelectorAll(".subHeaderIcon")
var paras2 = document.querySelectorAll(".iconText")
document.getElementById("two").addEventListener("click", function(){
    scrollToPosition(800);
})
document.getElementById("one").addEventListener("click", function(){
    scrollToPosition(0);
})
document.getElementById("three").addEventListener("click", function(){
    scrollToPosition(1440);
})
function scrollToPosition(position){
    window.scrollTo({
        top: position,
        behavior: "smooth"
    });
}
function decOpacity(){
    this.style.opacity = 0.5
}
function incOpacity(){
    this.style.opacity = 1
}
paras1.forEach(function(para){
    para.onmousedown = decOpacity
    para.onmouseup = incOpacity
})
paras2.forEach(function(para){
    para.onmousedown = decOpacity
    para.onmouseup = incOpacity
})
paras1.forEach(function(para){
    para.onclick = scroll
})
var typed1 = new Typed(".heading",{
    strings: ["Portfolio.","Akshith"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true,
});
var typed2 = new Typed(".intrests",{
    strings: ["Web Developing","Piano","Cricket","Badminton","Movies"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop:true,
})

