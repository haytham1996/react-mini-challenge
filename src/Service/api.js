import axios from "axios";

const userApiClientBase = () =>
    axios.create({
        baseURL: "https://fakestoreapi.com",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        timeout: 3000,
    });

export const productService = {

    async getAllProducts() {
        const res = await userApiClientBase().get('/products')

        return res.data;
    },
    async getById(id) {
        const res = await userApiClientBase().get('/products/' + id)

        return res.data
    }
}

export const userService = {

    async getAllUsers() {
        const res = await userApiClientBase().get('/users?sort=desc')

        return res.data;
    },

    async getById(id) {
        const res = await userApiClientBase().get('/users/' + id)

        return res.data
    }
}


export const carteService = {
    async getCarteByUser(id) {
        const res = await userApiClientBase().get('/carts/user/' + id)

        return res.data
    }
}

