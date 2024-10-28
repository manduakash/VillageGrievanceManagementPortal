$(document).ready(function(){

    // like
    $('.support').on('click', async function(){
        let user_id = $(this).data('user-id');
        let complaint_id = $(this).data('cmplnt-id');
        let like_icon = $(this).find('i.fa-thumbs-up');
        let response = await addSupport(complaint_id, user_id);
        if(response){

            // increase/decrease like count
            {
                let likes_count_span = $(this).closest('.complaint-actions').find('.likes-count');
                let like_count = likes_count_span.text().trim();

                if(like_icon.hasClass('fa-regular')){ // not liked
                    let increased_count = parseInt(like_count) + 1;
                    likes_count_span.text(increased_count); // update count
                }else{
                    let decreased_count = parseInt(like_count) - 1;
                    if(decreased_count<0){
                        likes_count_span.text(0); // update count        
                    }else{
                        likes_count_span.text(decreased_count); // update count        
                    }
                }
            }

            // like button highlight
            {
                like_icon.toggleClass('text-primary');
                if(like_icon.hasClass('fa-regular')){ // not liked
                    like_icon.addClass('fa-solid').removeClass('fa-regular');
                    $(this).closest('.complaint-actions').find('.disagree i.fa-thumbs-down').removeClass('text-primary').removeClass('fa-solid').addClass('fa-regular');
                }else if(like_icon.hasClass('fa-solid')){  // already liked
                    like_icon.addClass('fa-regular').removeClass('fa-solid');
                }else{  // if unable to find
                    like_icon.addClass('fa-regular').removeClass('fa-solid');
                }
            }
        }else{
            like_icon.addClass('fa-regular').removeClass('fa-solid');
        }
    })

    // dislike
    $('.disagree').on('click', async function(){
        let user_id = $(this).data('user-id');
        let complaint_id = $(this).data('cmplnt-id');
        let dislike_icon = $(this).find('i.fa-thumbs-down');
        let likes_count_span = $(this).closest('.complaint-actions').find('.likes-count');

        if(likes_count_span.text() != 0){
            let response = await addDisagree(complaint_id, user_id);

            if(response){

                // decrease like count
                {
                    let like_count = likes_count_span.text().trim();
    
                    if(dislike_icon.hasClass('fa-regular')){ // not disliked
                        let decreased_count = parseInt(like_count) - 1;
                        if(decreased_count < 0){
                            likes_count_span.text(0); // update count
                        }else{
                            likes_count_span.text(decreased_count); // update count
                        }

                    }else{
                        let increased_count = parseInt(like_count) + 1;
                        likes_count_span.text(increased_count); // update count        
                    }
                }
            }else{
                dislike_icon.addClass('fa-regular').removeClass('fa-solid');
            }
        }
        // dislike button highlight
        {
            dislike_icon.toggleClass('text-primary');
            if(dislike_icon.hasClass('fa-regular')){ // not disliked
                dislike_icon.addClass('fa-solid').removeClass('fa-regular');
                $(this).closest('.complaint-actions').find('.support i.fa-thumbs-up').removeClass('text-primary').removeClass('fa-solid').addClass('fa-regular');
            }else if(dislike_icon.hasClass('fa-solid')){  // already liked
                dislike_icon.addClass('fa-regular').removeClass('fa-solid');
            }else{  // if unable to find
                dislike_icon.addClass('fa-regular').removeClass('fa-solid');
            }
        }
    })

    // post comment
    $('.add-comment').on('click', async function(e){
        e.preventDefault();
        let user_id = $(this).data('user-id');
        let complaint_id = $(this).data('cmplnt-id');
        let comment = $(this).closest('.comment-container').find('.comment-box').val() || null;
    
        let response = await addComment(complaint_id, user_id, comment); // api calling function

        if(response){   // success
            location.reload(true);
            // Swal.fire({
            //     icon: "success",
            //     title: "Success!",
            //     text: "Comment posted successfully!",
            // }).then(function (ok) {
            // });
        }else{  // failure
            Swal.fire({
                icon: "warning",
                title: "Failure!",
                text: "Failed to post comment, Please try again",
            });
        }
    });

    // on-hover like button
    $('.support').on('mouseenter', function() {
        $(this).find('i.fa-regular').addClass('fa-bounce'); // Add your class on hover
    }).on('mouseleave', function() {
        $(this).find('i.fa-regular,i.fa-solid').removeClass('fa-bounce'); // Remove your class when cursor leaves
    });

    // copy link
    $('.copy-link').click(function (e) {
        e.preventDefault();
        var copyText = $(this).attr('href');
     
        document.addEventListener('copy', function(e) {
           e.clipboardData.setData('text/plain', copyText);
           e.preventDefault();
        }, true);
     
        document.execCommand('copy');  
        console.log('copied text : ', copyText);
        Swal.fire({
            icon: "success",
            title: "Link Copied!"
        });
      });
    
});