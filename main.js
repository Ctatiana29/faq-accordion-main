const accordionBtns= document.querySelectorAll('.accordion-btn')

accordionBtns.forEach(btn => {
    this.classList.toggle('active')
    const accordionDescription= this.querySelector('.plus-icon')
    const plusIcon= this.querySelector('.plus-icon')
    const minusIcon= this.querySelector('.minus-icon')

    if(accordionDescription.style.maxHeight){
        accordionDescription.style.maxHeight=null
        plusIcon.style.display='block'
        munusIcon.style.display=none
    }else{
        accordionDescription.style.maxHeight=accordionDescription.scrollHeight+'px'
        plusIcon.style.display='none'
        minusIcon.style.display='block'
    }
    
})