import React from 'react';

const CardContext = React.createContext({
  items: [],
  totalAmount: 0,
  totalPrice: 0,
  cartDispatch: () => {}
})

export default CardContext;
