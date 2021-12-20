/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import '../styles/globals.scss';
import { useState, useEffect } from 'react';

import cookie from 'js-cookie';

import Header from '@components/header/header';
import { CartContext } from '@contexts/cart';

function MyApp({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    cookie.set(
      'books',
      cartItems.map((itm) => itm.isbn),
    );
  }, [cartItems]);

  const addToCart = (book) => {
    const foundItem = cartItems.find((itm) => itm.isbn === book.isbn);
    if (!foundItem) {
      setCartItems([
        ...cartItems,
        {
          ...book,
        },
      ]);
      setTotal(total + book.price);
    }
  };

  const deleteFromCart = (book) => {
    setCartItems((items) => items.filter((itm) => itm.isbn !== book.isbn));
    setTotal(total - book.price);
  };

  const EmptyCart = () => {
    setCartItems([]);
    setTotal(0);
  };

  return (
    <CartContext.Provider value={{ addToCart, cartItems, total, deleteFromCart, EmptyCart }}>
      <Header />
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}

export default MyApp;
