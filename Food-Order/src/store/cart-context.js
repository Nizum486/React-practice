import React from "react"

React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (itme) => {},
    removeItem: (id) => {},
})

export default CartContext
