// Execute script after page load
window.onload = function digitalWp(){

    //Toggle Button
    let toggle = document.querySelector('.toggle-btn');
    let collapse = document.querySelector('.collapse');

    toggle.addEventListener('click',function(event){
        collapse.classList.toggle('active')
    })

    // Monsory js
    let grid = document.querySelector('.main-site .recent-work-area .images-flex');
    let msnry = new Mansonry(grid, {
        itemSelector: '.flex-item',
        gutter : 100,
        fitWidth: true
    })
}