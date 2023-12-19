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
    },
    /* 
    데이터를 미리 넣는다. 
    common 서비스들을 넣으면 될것같다.
    */
    // async nuxtServerInit(storeContext, nuxtContext) {
        // await storeContext.dispatch(FETCH_CART_ITEMS)
        // const { data } = await fetchCartItems()
        // storeContext.commit(
        //     'setCartItems', 
        //     data.map((item) => ({
        //         ...item,
        //         imageUrl: `${item.imageUrl}?random=${Math.random()}`
        // })))
    // }
}