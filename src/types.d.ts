declare type cardapio = {
  foto: string
  preco?: number
  id: number
  nome: string
  descricao: string
  porcao?: string
}

declare type Restaurant = {
  nome: string
  foto: string | undefined
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: cardapio[]
}
