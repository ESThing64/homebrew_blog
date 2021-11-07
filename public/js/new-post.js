$(document).ready(function(){


async function newFormHandler(event) {
    console.log("testign btn")
    event.preventDefault();
  
    const post_name = $('#post-title').val();
    const post_body = $('#content').val();
    console.log('hey')

    console.log(post_name);
    console.log(post_body);


  
    const response = await fetch(`/api/posts/new`, {
      method: 'POST',
      body: JSON.stringify({
        post_name,
        post_body,
      
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {


      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  };
  
$('#submit-btn').click(newFormHandler);

})