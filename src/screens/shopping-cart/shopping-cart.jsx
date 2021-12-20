/* eslint-disable react/prop-types */
import { useContext } from 'react';

import BookCart from '@components/book-cart/book-cart';
import Button from '@components/button/button';
import { CartContext } from '@contexts/cart';
import formatPrice from '@utils/format-price';
import getBestOffer from '@utils/get-best-offer';

import styles from './shopping-cart.module.scss';

export default function Shopping({ offers }) {
  const { cartItems, total, EmptyCart } = useContext(CartContext);

  return (
    <div className={styles.cart}>
      <h2>Ma liste d&apos;achat</h2>

      {total === 0 ? (
        <div className={styles.emptyCart}>Votre panier est vide </div>
      ) : (
        <>
          <div className={styles.cartList}>
            {cartItems.map((book) => (
              <BookCart key={book.isbn} book={book} />
            ))}
          </div>
          <div className={styles.prices}>
            <div className={styles.price}>
              <h3>Prix</h3>
              <p className={styles.priceOriginal}>{formatPrice(total)}</p>
            </div>
            <div className={styles.price}>
              <h3>Prix Promo</h3>
              <p className={styles.pricePromo}>{formatPrice(getBestOffer(total, offers))}</p>
            </div>
          </div>
          <Button onClick={() => EmptyCart()}>Vider ma liste d'achats</Button>
        </>
      )}
    </div>
  );
}
