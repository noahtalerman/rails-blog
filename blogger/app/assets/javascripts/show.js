document.addEventListener("turbolinks:load", function() {
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
})