
let dataContent = [
    'content1',
    'content2',
    'content3',
    'content4',
    'content5',
    'content6',
    'content7',
    'content8',
    'content9',
    
]

pagination({
    listContent: '.listContent',
    btn_pre :'.btn-pre',
    btn_next:'.btn-next',
    btn_number:'.btn-number',
    itemsPerPage :2,
    dataContent: dataContent
    
})
function pagination(options){
    let listContent = document.querySelector(options.listContent)
    let itemsPerPage = options.itemsPerPage
    let numberPage =  options.dataContent.length/itemsPerPage
    htmlBtnNumber = ''
    let btn_number  = document.querySelector(options.btn_number)
    let btn_pre = document.querySelector(options.btn_pre)
    let btn_next = document.querySelector(options.btn_next)

    for(let i=0; i<numberPage; i++){
        htmlBtnNumber += `<div><button class="pageNumber">${i+1}</button></div>`
    }
    btn_number.innerHTML = htmlBtnNumber
    changeContent(1, options.itemsPerPage, options.dataContent)
    let btnNumberAll = document.querySelectorAll('.pageNumber')
    for(let i=0; i<btnNumberAll.length; i++){
        btnNumberAll[i].onclick = function(){
            changeContent(i+1, options.itemsPerPage, options.dataContent)
        } 

        
    }
    btn_pre.onclick= function(){
        let currentPage = document.querySelector('.content').title
        if(currentPage > 1){
            changeContent(--currentPage, options.itemsPerPage, options.dataContent)

        }
        
    }
    btn_next.onclick= function(){
        let currentPage = document.querySelector('.content').title
        if(currentPage < numberPage){
            changeContent(++currentPage, options.itemsPerPage, options.dataContent)

        }
        
    }

   function changeContent(currentPage,itemsPerPage, dataContent){
        htmlContent =''
        lengthData = dataContent.length;
        lastIndex = currentPage*itemsPerPage;

        if(lastIndex > dataContent){
            lastIndex = ''
        }
        contentPerPage = dataContent.slice(lastIndex-itemsPerPage, lastIndex)
        for(let i=0; i<itemsPerPage; i++){
            if(contentPerPage[i] ==undefined){
                contentPerPage[i] =''
            }
            htmlContent += `<div class="content" title=${currentPage}>${contentPerPage[i]}</div>`
        }
        
        listContent.innerHTML = htmlContent
   }
}