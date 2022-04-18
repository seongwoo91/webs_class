//highlight.js
const highlight = function(){
    hljs.highlightAll();
}
highlight();

//modal
const modal = function(){
    document.querySelector(".source-btn").addEventListener('click', () => {
        document.querySelector("#modal").classList.add("show");
        document.querySelector("#modal").classList.remove("hide");

    })
    document.querySelector(".modal-close").addEventListener('click', () => {
        document.querySelector('#modal').classList.add("hide");
    })                
};
modal(); 

//tabmenu
const tabMenu = function(){
const tabBtn = document.querySelectorAll(".view-title > ul > li");
const tabCont = document.querySelectorAll(".view-cont > div");

//각각의 버튼을 클릭하면 경고창을 띄워주세요
tabBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        //모든 클래스의 액티브르 삭제
        tabBtn.forEach((el) => {
            el.classList.remove("active");
        });                        
        //내가 클릭한건 active 추가
        btn.classList.add("active");
        //모든 컨텐츠 박스 안보이게
        tabCont.forEach(el => {
            el.style.display="none";
        })
        //내가 클릭한 컨텐츠 박스를 보이게
        tabCont[index].style.display = 'block';

    })
})
}
tabMenu();