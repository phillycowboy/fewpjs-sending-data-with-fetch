
const baseUrl = "http://localhost:3000/users"



function submitData(name, email) {
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name, email})
    };

    return fetch(baseUrl, configObj)
        .then(function (response) {
            return response.json()
        })
        .then(function (object) {
            document.body.innerHTML = object["id"]
        })
        .catch(function(error) {
            document.body.innerHTML = error.message 
            
        });
    
};


    // .catch(function(error) {
    //     alert("BAD THINGS!");
    //     console.log(error.message);
    // });