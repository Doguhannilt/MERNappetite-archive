// forms/manage-restaurant
export const forumFill = async (url, data) => {

    try {
      const formDataJSON = JSON.stringify(data); 
    const rawResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: formDataJSON 
    });
      const content = await rawResponse.json();
  
    console.log(formDataJSON)
    console.log(content);
    } catch (error) {
      console.log(error)
    } 
  
  };