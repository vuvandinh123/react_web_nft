export default function formatPrice(value) {
    return new Intl.NumberFormat().format(value);
  }