// author: Edsuns@qq.com

// menu button
var menuButton=document.getElementsByClassName("menu-button")[0],
menuLink=menuButton.getElementsByTagName("input")[0],
menu=document.getElementsByClassName("menu")[0],
blur=document.getElementById("blur");
document.body.addEventListener("click",function(e){
menuButton.contains(e.srcElement) ? ( menuLink.checked ? menuShow() : menuHide() ):
menuHide();
});
document.onscroll = function () {
if(menuLink.checked)
menuHide();
}
function menuHide() {
menuLink.checked=false;
blur.style.display="none";//不用添加class来实现自适应，因为初始css未定义height 默认为0
menu.className="menu";
}
function menuShow(){
blur.style.display="block";
menu.className="menu show";//通过增加class标签使 适配移动设备的css 生效，因为直接修改style不能达到自适应的目的
}

// toTop
var toTop=document.getElementById("toTop");
document.addEventListener("scroll",function(){
    if((document.documentElement.scrollTop || document.body.scrollTop)<300){
        toTop.style.opacity="0";
        toTop.style.visibility="hidden";
    } else {
        toTop.style.opacity="1";
        toTop.style.visibility="visible";
    }
})
function scrollToTop() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
        window.scrollTo(0, scrollTop>1200 ? 1200 : scrollTop>800 ? scrollTop-90 : scrollTop>360 ? scrollTop-50 : scrollTop-scrollTop/14-5);
        window.requestAnimationFrame(scrollToTop);
    }
}
toTop.addEventListener("click",scrollToTop);
