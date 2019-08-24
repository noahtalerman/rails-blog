 function setUnderlineHeight() {   
    let header = document.querySelector('.header')
    let headerHeight = header.offsetHeight;
    document.querySelector('.underline').style.setProperty('top', `${headerHeight}px`);
    console.log(headerHeight)
}

document.addEventListener('turbolinks:load', function() {
    setUnderlineHeight();
    window.onresize = setUnderlineHeight
})
