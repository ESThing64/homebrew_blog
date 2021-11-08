

$(document).ready(function(){
 

async function newFormHandler(event) {
  
    event.preventDefault();
  
    const comment_body = $('#comment-body').val();
    // const post_id = $('#content').val();
    
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];

  console.log(post_id)

  
    const response = await fetch(`/api/comments/new`, {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_body,
      
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {


      document.location.reload()
    } else {
      alert(response.statusText);
    }
  };
  
$('#comment-btn').click(newFormHandler);

})