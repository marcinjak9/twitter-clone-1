const ApiFactory = (endpoint, method = "GET", body = {}) => {
    new Promise((resolve, reject) => {
        const token = localStorage.getItem('token');

        if(token) {
            fetch(`https://secret-temple-42258.herokuapp.com/${endpoint}`, {
                method: method,
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            })
            .then((res) => res.json())
            .then((json) => resolve(json))
            .catch((error) => reject(error));
        } else {
            reject('Token not found!');
        }
    });
};

export default ApiFactory;