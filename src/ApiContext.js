import React from "react";

export default React.createContext({
    cartItems: [],
    handleDeleteItem: () => {},
    handleAddItem:()=>{},
    cartTotal: ''
});