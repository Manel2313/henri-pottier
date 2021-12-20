const formatPrice = (price) => {
  const newPrice = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(
    price,
  );

  return newPrice;
};

export default formatPrice;
