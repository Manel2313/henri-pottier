import { useContext } from 'react';

import Image from 'next/image';
import PropTypes from 'prop-types';

import Button from '@components/button/button';
import { CartContext } from '@contexts/cart';
import formatPrice from '@utils/format-price';

import styles from './book.module.scss';

function Book({ book }) {
  const contextData = useContext(CartContext);

  return (
    <div className={styles.book}>
      <div className={styles.figure}>
        <Image src={book?.cover} alt="" objectFit="cover" layout="fill" />
      </div>
      <div className={styles.bookContent}>
        <h3 className={styles.bookTitle}>{book?.title}</h3>
        <p className={styles.bookDescription}>{book?.synopsis}</p>
        <p className={styles.bookPrice}>{formatPrice(book?.price)}</p>
        <Button onClick={() => contextData.addToCart(book)}>add to card</Button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    cover: PropTypes.string,
    title: PropTypes.string,
    synopsis: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};

export default Book;
