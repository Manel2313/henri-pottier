import { useContext } from 'react';

import Image from 'next/image';
import PropTypes from 'prop-types';

import Button from '@components/button/button';
import { CartContext } from '@contexts/cart';
import formatPrice from '@utils/format-price';

import styles from './book-cart.module.scss';

function BookCart({ book }) {
  const { deleteFromCart } = useContext(CartContext);

  return (
    <div className={styles.book}>
      <Image
        src={book?.cover}
        width="70px"
        height="70px"
        alt=""
        className={styles.imgthumb}
        objectFit="cover"
      />
      <h3 className={styles.bookTitle}>{book?.title}</h3>
      <p className={styles.bookDescription}>{book?.synopsis}</p>
      <p className={styles.bookPrice}>{formatPrice(book?.price)}</p>
      <Button onClick={() => deleteFromCart(book)}>Delete</Button>
    </div>
  );
}

BookCart.defaultProps = {
  book: {},
};

BookCart.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    cover: PropTypes.string,
    title: PropTypes.string,
    synopsis: PropTypes.string,
    price: PropTypes.string,
  }),
};

export default BookCart;
