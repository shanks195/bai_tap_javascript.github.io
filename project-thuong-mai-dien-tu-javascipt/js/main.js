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

const tabs1 = document.querySelector('.tabs1').querySelectorAll('[data-tab-target]')
console.log("tab", tabs1);
const tabContents1 = document.querySelector('.tab-content1').querySelectorAll('[data-tab-content]')
console.log("content", tabContents1);

tabs1.forEach(item => {
    console.log("tabbbbbb", item);
    item.addEventListener('click', () => {
        console.log("dataset", item.dataset.tabTarget)

        const target = document.querySelector(item.dataset.tabTarget)
        console.log(item.dataset.tabTarget)
        tabContents1.forEach(tabContent => {
            tabContent.classList.remove('activeTwo')
        })
        tabs1.forEach(item => {
            item.classList.remove('activeTwo')
        })
        item.classList.add('activeTwo')
        target.classList.add('activeTwo')
    })
})