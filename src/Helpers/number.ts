const formatPrice = (input?: number) => {
  if (input) return input.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

  return NaN;
};

export { formatPrice };
