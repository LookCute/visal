document.getElementById("up-arrow").addEventListener("click", scrollToTop);
function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const upArrow = document.getElementById("up-arrow");
const sidebar = document.getElementById("side-bar");
window.onscroll = function(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        upArrow.style.display = "block";
        sidebar.style.display = "none";
    }
    else{
        upArrow.style.display = "none";
        sidebar.style.display = "flex";
    }
};

function scrollToSection(id){
    const section = document.getElementById(id);
    section.scrollIntoView({behavior: "smooth"});
}

window.addEventListener("scroll", () => {

    let currentId = "";
    document.querySelectorAll(".section").forEach(section => {
        if(scrollY >= section.offsetTop - 100){
            currentId = section.getAttribute("id");
        }
    });
    
    document.querySelectorAll(".menu-item").forEach(item => {
        item.classList.remove("active");
    });
    
    const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
    if(!isAtBottom && currentId){
        const activeLink = document.getElementById(`link-${currentId}`);
        activeLink.classList.add("active");
    }
});

function gotoMedia(nameMedia){
    if(nameMedia === "facebook") window.open("https://www.facebook.com/cheng.sokvisal.1")
    else if(nameMedia === "telegram") window.open("https://web.telegram.org/a/#1844615346")
    else if(nameMedia === "tiktok") window.open("https://www.tiktok.com/@visal.w")
    else if(nameMedia === "github") window.open("https://github.com/LookCute")
}