// menu-List-ul->
const btnToggel = document.getElementById("toggle");
const menuItems = document.getElementById("MenuItems");
const menuItemsLink = document.querySelectorAll("#MenuItems li a");
const allSections = document.querySelectorAll('body > div');

menuItems.style.right = "900px";
btnToggel.onclick = function () {

    if (menuItems.style.right === "900px") {

        menuItems.style.right = "0";
    } else {
        menuItems.style.right = "900px";
    }
}

menuItems.onclick = function () {

    if (menuItems.style.right === "900px") {

        menuItems.style.right = "0";
    } else {
        menuItems.style.right = "900px";
    }
}

menuItemsLink.forEach(link => {
    link.addEventListener('click', (e) => {

        if (e.currentTarget.dataset.sec) {

            e.preventDefault();
            
            allSections.forEach(sec => {

                if (e.currentTarget.dataset.sec === sec.id) {
        
                    sec.scrollIntoView();
        
                }
        
            });

        }
        
    })
})






// scrolling button
const btnScroll = document.getElementById("btnscroll");
window.onscroll = function () {
    if (window.scrollY >= "600") {
        btnScroll.style.display = "block";
    }
    else {
        btnScroll.style.display = "none";
    }

}
btnScroll.onclick = function () {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
