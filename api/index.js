import axios from "axios"

const instance = axios.create({
    // baseURL: process.env.BASE_URL,
    baseURL: 'http://localhost:3000',
})

function fetchProduct() {
    return instance.get(`/products`)
}

function fetchProductById(id) {
    return instance.get(`/products/${id}`)
}

function fetchProductsByKeyword(keyword) {
    return instance.get(`/products`, {
        params: {
            name_like: keyword,
        },
    })
}

function fetchCartItems() {
    return instance.get(`/carts`)
}

function createCartItem(cartItems) {
    return instance.post('/carts', cartItems)
}

export{ fetchProduct, fetchProductById, fetchProductsByKeyword, createCartItem, fetchCartItems }