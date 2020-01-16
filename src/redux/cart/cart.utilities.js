export const addItemToCart = (cartItems, newItem) => {
  const alreadyAdded = cartItems.find(item => item.id === newItem.id);

  if(alreadyAdded) {
     return cartItems.map(item =>
          item.id === newItem.id ?
          {...item,quantity: item.quantity + 1}:
          item)
  }
  else{ return [...cartItems, {...newItem, quantity: 1}];}
};