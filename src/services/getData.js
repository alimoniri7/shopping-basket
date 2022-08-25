import axios from 'axios'

const getData = async (endpoint) => {
    let response = await axios.get(`https://fakestoreapi.com/products/${endpoint}`);
    return response.data
}

export {getData}