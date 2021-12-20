/* eslint-disable react/prop-types */
import Paniers from '@screens/shopping-cart/shopping-cart';

const getCookie = (cookie, name) => {
  const match = cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  if (match) return match[2];

  return '';
};

export async function getServerSideProps({
  req: {
    headers: { cookie },
  },
}) {
  const ids = getCookie(cookie, 'books')?.split('%2C');
  const res = await fetch(`https://henri-potier.techx.fr/books/${ids?.join(',')}/commercialOffers`);
  const promotions = await res.json();

  if (!promotions) {
    return {
      notFound: true,
    };
  }

  return {
    props: { promotions },
  };
}

export default function Panier({ promotions }) {
  return <Paniers offers={promotions.offers} />;
}
