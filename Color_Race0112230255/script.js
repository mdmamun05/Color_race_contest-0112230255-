const btn = document.getElementById('menuBtn');
const menu = document.querySelector('.sideBar_navigation');


btn.addEventListener('click', () =>{
    menu.classList.toggle('active');
})

window.addEventListener('click', function(event) {
    const sideBar = document.querySelector('.sideBar_navigation');
    const menuBtn = document.getElementById('menuBtn');

    if(!sideBar.contains(event.target) && !menuBtn.contains(event.target)) {
        if(sideBar.classList.contains('active')) {
            sideBar.classList.remove('active');
        }
    }
})