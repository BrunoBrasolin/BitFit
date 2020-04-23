const menuBtn = $('.menu-btn');
let menuOpen = false;

menuBtn.click(()=>{
    if(!menuBtn){
        menuBtn.toggleClass("open");
        menuOpen = true;
    } else {
        menuBtn.toggleClass("open");
        menuOpen = false;
    }
})