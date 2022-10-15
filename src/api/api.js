import axios from "axios"

const config = {
    headers: {
        "Content-type": "application/json"
    }
}

export function get_from_backend(endpoint, setState){
    axios.get(endpoint).then(function (response) {
        return setState(response.data);
      });
    
} 

export function post_to_backend(endpoint, payload, setState){
    axios.post(endpoint, {
        ...payload, config
    })
        .then((response) => {
            console.log(response)
            setState()
        }, (error) => {
            console.log(error);
        });
}
