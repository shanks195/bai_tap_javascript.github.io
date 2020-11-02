const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        console.log(tab.dataset)
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})


let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];

let tabsPane = tabHeader.getElementsByTagName("li");

for (let i = 0; i < tabsPane.length; i++) {
    tabsPane[i].addEventListener("click", function() {
        tabHeader.getElementsByClassName("activeTwo")[0].classList.remove("activeTwo");
        tabsPane[i].classList.add("activeTwo");
        tabBody.getElementsByClassName("activeTwo")[0].classList.remove("activeTwo");
        tabBody.getElementsByTagName("div")[i].classList.add("activeTwo");

        tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`;
    });
}