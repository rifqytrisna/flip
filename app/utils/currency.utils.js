const formatPriceIdr = value => {
  try {
    const price = value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    return `Rp${price}`;
  } catch {
    return 0;
  }
};

export default formatPriceIdr;
