$(document).ready(function(){
 

    async function newFormHandler(event) {
      
        event.preventDefault();
      
       
        
        const post_id = window.location.toString().split('/')[
          window.location.toString().split('/').length - 1
      ];
    
      
    
      
        const response = await fetch(`/api/comments/new`, {
          method: 'DELETE',
          body: JSON.stringify({
            post_id: post_id
           
          
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
    
    
          document.location.replace('/dashboard/')
        } else {
          alert(response.statusText);
        }
      };
      
    $('#del-btn').click(newFormHandler);
    
    })