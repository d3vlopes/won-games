export default function formatPrice(price: number | bigint): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export function formatPriceUS(price: number | bigint): string {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}
