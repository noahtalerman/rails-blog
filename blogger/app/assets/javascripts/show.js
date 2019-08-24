function getTheme() {
    let background = window.getComputedStyle(document.documentElement).getPropertyValue("--background");
    return background;
}

function changeTheme(e) {
    if (Array.from(e.target.classList).indexOf('theme_btn') !== -1) {
        console.log('click')
        if (e.target.textContent === 'Light') {
            document.documentElement.style.setProperty('--color', '#140E17');
            document.documentElement.style.setProperty('--background', '#F4F7F2');
            document.documentElement.style.setProperty('--secColor', '#808080');
            e.target.textContent = 'Dark';
        } else if (e.target.textContent === 'Dark') {
            document.documentElement.style.setProperty('--color', '#F4F7F2');
            document.documentElement.style.setProperty('--background', '#140E17');
            document.documentElement.style.setProperty('--secColor', '#BCC2B7');
            e.target.textContent = 'Light';
        }
    }
}

function changeTextSize(e) {
    if (Array.from(e.target.classList).indexOf('text_btn') !== -1 ) {
        let sizeAdd = e.target.id;
        console.log(sizeAdd)
        let fonts = [4, 2, 1.7, 1.2, 1]
        for (let i = 0; i < fonts.length; ++i) {
            document.documentElement.style.setProperty(`--font${i}`, `${fonts[i] + Number(sizeAdd)}vw`);
        }
    }
}


document.addEventListener('turbolinks:load', function() {
    if (document.querySelector('.comment_btn')) {
        let commentBtn = document.querySelector('.comment_btn');
        let commentForm = document.querySelector('.new_comment');
        let commentFormHeight = commentForm.offsetHeight;
        commentForm.style.height = '0px';
        
        commentBtn.addEventListener('mouseup', function() {
            if (commentForm.style.height === '0px')
                commentForm.style.height = `${commentFormHeight}px`;
            else if (commentForm.style.height === `${commentFormHeight}px`) {
                commentForm.style.height = '0px';
            }
        });
    }

    let background = getTheme();
    if (background === '#F4F7F2' && document.querySelector('.theme_btn')) {
        document.querySelector('.theme_btn').textContent = 'Dark';
    } else if (background === '#140E17' && document.querySelector('.theme_btn')) {
        document.querySelector('.theme_btn').textContent = 'Light';
    }
    
    window.document.documentElement.addEventListener('mousedown', function(e) {
        changeTextSize(e);
    });
    window.document.documentElement.addEventListener('mousedown', function(e) {
        changeTheme(e);
    });
})