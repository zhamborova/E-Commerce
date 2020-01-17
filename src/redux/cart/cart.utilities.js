export const addItem = (cartItems, newItem) => {
  const alreadyAdded = cartItems.find(item => item.id === newItem.id);

  if(alreadyAdded) {
     return cartItems.map(item =>
          item.id === newItem.id ?
          {...item,quantity: item.quantity + 1}:
          item)
  }
  else{ return [...cartItems, {...newItem, quantity: 1}];}
};


export const removeItem=(cartItems, itemId) => {
  return cartItems.filter(item => (item.id !== itemId))
};


export const decreaseItemCount=(cartItems, item)=>{
        const {quantity, id} = item;
        return quantity === 1 ?
        removeItem(cartItems,id) :
        cartItems.map(cartItem =>  cartItem.id === id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
};