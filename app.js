let listA = document.querySelectorAll('a'); //Find all link tabs on website
let active = 'intro';//active is the page being displayed. Defaulted to intro page
let zIndex = 2; //zIndex is the current index of page

//Creating a function when a tab or link has been clicked
listA.forEach(a => {
    a.addEventListener('click', function(event){
        let valueTab = a.dataset.tab;// Receive data from data-tab
        let activeOld = document.querySelector('.tab.active');
        if(activeOld) activeOld.classList.remove("active");

        if(valueTab && valueTab != active){
            let tabActive = document.getElementById(valueTab);
            zIndex++;
            tabActive.style.zIndex = zIndex;
            active = valueTab;

            tabActive.style.setProperty('--x', event.clientX + 'px');
            tabActive.style.setProperty("--y", event.clientY + "px");
            tabActive.classList.add('active');
        }
    })
})