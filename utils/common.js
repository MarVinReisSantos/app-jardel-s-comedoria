export function formatPrice(value) {
  return `R$ ${parseFloat(value).toFixed(2).replace(".", ",")}`;
}