
function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };
  
    return fetch("http://localhost:3000/users", configObject)
      .then(response => response.json())
      .then(data => {
        document.body.innerHTML += `<p>${data.id}</p>`;
      })
      .catch(error => {
        document.body.innerHTML += `<p>${error.message}</p>`;
      });
  }