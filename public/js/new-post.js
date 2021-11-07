$(document).ready(function(){


async function newFormHandler(event) {
    console.log("testign btn")
    event.preventDefault();
  
    const title = $(':input[name="post-title"]').value;
    const content = $(':input[name="content"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
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
  
$('#new-post-form').submit(newFormHandler);

})