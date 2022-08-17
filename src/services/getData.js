import axios from 'axios'

const getData = async () => {
    let response = await axios.get('https://fakestoreapi.com/products');
    return response.data
}

export {getData}