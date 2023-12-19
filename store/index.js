import { fetchCartItems } from "~/api"

export const FETCH_CART_ITEMS = 'FETCH_CART_ITMES'

export const state = () => ({
    cartItems: [],
})

export const mutations = {
    addCartItem(state, cartItems) {
        const newCartItem = {
            ...cartItems,
            imageUrl: `${cartItems.imageUrl}?random=${Math.random()}`
      }
        state.cartItems.push(newCartItem)
    },
    setCartItems(state, cartItems) {
        state.cartItems = cartItems
    }
}


export const actions = {
    async [FETCH_CART_ITEMS]({ commit }) {
        const { data } = await fetchCartItems()
        commit('setCartItems', data.map(item => ({
            ...item,
            imageUrl: `${item.imageUrl}?random=${Math.random()}`
        })))
    }    
}