let closeBtn = document.querySelector('.notification__close');
let notificationBlock = document.querySelector('.notification');
let dropdownLink = document.getElementById('dropdownlink');
let dropdownItem = document.querySelector('.item-dropdown');

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const header = document.querySelector('.items-list');
    const itemLinks =  document.querySelectorAll('.items-list li');
    const lections =  document.querySelector('.lection__items');
    const lectionLinks =  document.querySelectorAll('.lection__items li');


    burger.addEventListener('click', ()=>{
        //Toggle Nav
        header.classList.toggle('item-active');
        lections.classList.toggle('item-active');
        
    

        //Animate Links
        itemLinks.forEach((link, index)=>{
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `headerLinkFade 0.5s ease forwards ${index / 24}s`;
            }
        });
    
        lectionLinks.forEach((link, index)=>{
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `headerLinkFade 0.5s ease forwards ${index / 24}s`;
            }
        });

        //Burger animation
        burger.classList.toggle('toggle');
    });

    burger.addEventListener('click', ()=>{
        //Toggle Nav
        
    });

}

navSlide();


// setTimeout(function() {
//     notificationBlock.classList.toggle('closed');
//     if (document.querySelector('.closed')) {
//         setTimeout(function() {
//             document.querySelector('.notification').remove();
//         }, 400);
//     }
// }, 10000);

// closeBtn.onclick = function () {
//     notificationBlock.classList.toggle('closed')
//     setTimeout(function() {
//         document.querySelector('.notification').remove();
//     }, 400);
// }

document.getElementById('dropdownlink').onclick = function(e){
    dropdownItem.classList.toggle('active');
    e.preventDefault();
}

// document.getElementById('dropdownlink').addEventListener('click', function() {
//     this.innerHTML = "good";
//   })

// dropdownLink.onclick = function () {
//     dropdownItem.classList.toggle('active');
//     return false;
// }
