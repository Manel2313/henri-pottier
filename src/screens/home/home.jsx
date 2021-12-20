/* eslint-disable react/prop-types */
import Book from '@components/book/book';

import styles from './home.module.scss';

export default function Home({ books }) {
  return (
    <main className={styles.books}>
      <div className={styles.container}>
        {books?.map((book) => (
          <Book key={book.isbn} book={book} />
        ))}
      </div>
    </main>
  );
}
