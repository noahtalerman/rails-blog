function getTheme() {
    let theme = localStorage.getItem('theme');
    return theme;
}

function setThemeLight() {
    localStorage.setItem('theme', 'light');
    document.documentElement.style.setProperty('--color', '#140E17');
    document.documentElement.style.setProperty('--background', '#F4F7F2');
    document.documentElement.style.setProperty('--secColor', '#808080');
}

function setThemeDark() {
    localStorage.setItem('theme', 'dark');
    document.documentElement.style.setProperty('--color', '#F4F7F2');
    document.documentElement.style.setProperty('--background', '#140E17');
    document.documentElement.style.setProperty('--secColor', '#BCC2B7');
}

function changeTheme(e) {
    if (Array.from(e.target.classList).indexOf('theme_btn') !== -1) {
        if (e.target.textContent === 'Light') {
            setThemeLight();
            e.target.textContent = 'Dark';
        } else if (e.target.textContent === 'Dark') {
            setThemeDark();
            e.target.textContent = 'Light';
        }
    }
}

function openTextMenu() {
    let textBtns = document.querySelectorAll('.text_btn-item');
    textBtns.forEach(function(btn) {
        btn.style.setProperty('display', 'block');
            btn.style.setProperty('transform', 'translateY(0px)');
            btn.style.setProperty('opacity', '1');
            btn.style.setProperty('z-index', '1');
    });
    document.querySelector('.text_btn-container').classList.add('open');
}

function closeTextMenu() {
    let textBtns = document.querySelectorAll('.text_btn-item');
    textBtns.forEach(function(btn) {
        let translations = ['-25px', '-55px', '-85px', '-115px'];
        let index = btn.id.split('').filter(elem => !isNaN(Number(elem)))[0];
        btn.style.setProperty('transform', `translateY(${translations[Number(index) - 1]})`);
        btn.style.setProperty('opacity', '0');
        btn.style.setProperty('display', 'hidden');
        btn.style.setProperty('z-index', '-1');
    });
    document.querySelector('.text_btn-container').classList.remove('open');
}

function controlTextMenu(e) {
    console.log(e.target.parentNode)
    if ((e.target.parentNode === document.querySelector('.text_btn-container')) || (e.target === document.querySelector('.text_btn-container'))) {
        if (Array.from(document.querySelector('.text_btn-container').classList).indexOf('open') === -1) {
            openTextMenu();
        }
        else {
            closeTextMenu();
        }
    }
}

function getTextSize() {
    let size = '0'
    if (localStorage.getItem('textSize')) {
        size = localStorage.getItem('textSize')
    }
    return size;
}

function setTextSize() {
    let size = getTextSize();
    localStorage.setItem('textSize', size);
    let fonts = [4, 2, 1.7, 1.2, 1]
    for (let i = 0; i < fonts.length; ++i) {
        document.documentElement.style.setProperty(`--font${i}`, `${fonts[i] + Number(size)}vw`);
    }
}

function changeTextSize(e) {
    if (Array.from(e.target.classList).indexOf('text_btn') !== -1 ) {
        let sizeAdd = e.target.name;
        localStorage.setItem('textSize', sizeAdd);
        console.log(localStorage.getItem('textSize'))
        let fonts = [4, 2, 1.7, 1.2, 1]
        for (let i = 0; i < fonts.length; ++i) {
            document.documentElement.style.setProperty(`--font${i}`, `${fonts[i] + Number(sizeAdd)}vw`);
        }
    }
}

function openComment(e) {
    if (e.target === document.querySelector('.comment_btn')) {
        console.log(e.target)
        let commentFormWrap = document.querySelector('.comments_form--wrapper');
        let commentForm = document.querySelector('.new_comment');
        let commentFormHeight = commentForm.offsetHeight;
        console.log(commentForm.offsetHeight)
        if (commentFormWrap.offsetHeight === 0)
            commentFormWrap.style.setProperty('height', `${commentFormHeight}px`);
        else if (commentForm.offsetHeight === commentFormHeight) {
            commentFormWrap.style.setProperty('height', '0px');
        }
    }
}

document.addEventListener('turbolinks:load', function() {
    if (document.querySelector('.comment_btn')) {
        // let commentBtn = document.querySelector('.comment_btn');
        // let commentForm = document.querySelector('.new_comment');
        // let commentFormHeight = commentForm.offsetHeight;
        // commentForm.style.height = '0px';
        
        // commentBtn.addEventListener('mouseup', function() {
        //     if (commentForm.style.height === '0px')
        //         commentForm.style.height = `${commentFormHeight}px`;
        //     else if (commentForm.style.height === `${commentFormHeight}px`) {
        //         commentForm.style.height = '0px';
        //     }
        // });
        window.document.documentElement.addEventListener('mouseup', openComment);
    }

    setTextSize();
    let background = getTheme();
    console.log(background)
    if (background === 'light') {
        setThemeLight();
    }
    else if (background === 'dark'){
        setThemeDark();
    }
    if (document.querySelector('.theme_btn') && background === 'dark') {
        document.querySelector('.theme_btn').textContent = 'Light';
    }
    else if (document.querySelector('.theme_btn') && background === 'light') {
        document.querySelector('.theme_btn').textContent = 'Dark';
    }
    window.document.documentElement.addEventListener('mouseup', changeTextSize);
    window.document.documentElement.addEventListener('mouseup', changeTheme);

    window.document.documentElement.addEventListener('mouseup', controlTextMenu);
})