const getOfferAmount = (total, offer) => {
  switch (offer.type) {
    case 'percentage':
      return total - (total * offer.value) / 100;
    case 'minus':
      return total - offer.value;
    case 'slice': {
      const nbSlice = Math.floor(total / offer.sliceValue);
      return total - nbSlice * offer.value;
    }
    default:
      return 0;
  }
};

const getBestOffer = (total, offers) => {
  const newPrices = offers.map((offer) => getOfferAmount(total, offer));

  return Math.min(...newPrices);
};

export default getBestOffer;
