$(".menu > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown();
});
$(".menu > ul > li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp();
});

let tabMenu = $("#tabmenu");

tabMenu.find("ul > li > ul").hide();
tabMenu.find("ul > li.active > ul").show();

function tabList(e){
    e.preventDefault();
    let target = $(this);

    target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
};
tabMenu.find("ul > li > a").click(tabList);

////////////////////////////////////////////////////////////////////////
//var sliderHeight = $(".slide").outerHeight;
//var currentIndex = 0;
//setInterval(function(){
//    if(currentIndex < 2 ){
//        currentIndex++;
//    } else {
//        currentIndex = 0;
//    }
//    var slidePosetion =  - sliderHeight * currentIndex +"px";
//
//    console.log(sliderHeight);
//    $(".img_inner").animate({left:slidePosetion},400);
//}, 3000);

const sliderWrap = document.querySelector(".slidecontents")
        const sliderImg = document.querySelector(".img_slide")      
        const sliderInner = document.querySelector(".img_inner")  
        const slider = document.querySelectorAll(".slide")          
        console.log(slider);
        let urrentIndex = -1;       //첫 번째 이미지(현재 보이는 이미지)
        let sliderCount = slider.length;   //이미지 갯수
        let sliderHeight = sliderImg.offsetHeight;
        let sliderClone = sliderInner.firstElementChild.cloneNode(true)
        sliderInner.appendChild(sliderClone)
        function SliderEffect(){
         urrentIndex++;
            sliderInner.style.transition = "all 0.4s"
            sliderInner.style.top = - sliderHeight * urrentIndex + "px"
            if (urrentIndex == 3){
                setTimeout(()=>{
                //초기화
                sliderInner.style.transition ="0s";             
                sliderInner.style.top ="0px";  
                },300)  
                urrentIndex = 0;  
            }
        }
        setInterval(SliderEffect, 2000);
/////

$(".card2").click(function(){
    $(".layer").slideDown(300);
    $(".layer_bg").show();
});
$(".close").click(function(){
    $(".layer").slideUp(300);
    $(".layer_bg").hide();
});
