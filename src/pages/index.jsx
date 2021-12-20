/* eslint-disable react/prop-types */
import HomePage from '@screens/home/home';

export async function getServerSideProps() {
  const res = await fetch(`https://henri-potier.techx.fr/books`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default function Home({ data }) {
  return <HomePage books={data} />;
}
