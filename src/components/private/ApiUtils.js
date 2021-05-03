const ApiUtils = (path, method = "GET", body) =>
  new Promise((resolve, reject) => {
    const itemToken = localStorage.getItem("token");

    if (itemToken) {
      fetch(`https://secret-temple-42258.herokuapp.com/${path}/`, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${itemToken}`,
        },
        body: JSON.stringify(body) 
      })
        .then((res) => res.json())
        .then((json) => resolve(json))
        .catch((error)=> reject(error))
    } else{
        reject("non c'è il token")
    }
  });

  export default ApiUtils;
