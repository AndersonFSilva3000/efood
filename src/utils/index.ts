export const getTotalPrince = (items: cardapio[]) => {
  return items.reduce((accumulator, currentValue) => {
    if (currentValue.preco) {
      return (accumulator += currentValue.preco)
    }
    return 0
  }, 0)
}

export const formatPrince = (prince = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(prince)
}
