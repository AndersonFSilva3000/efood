import React from 'react'

import ProductList from '../../components/ProductList'
import ProductIten from '../../models/ProductIten'

import sushi from '../../assets/images/shushi.png'
import tattoria from '../../assets/images/tattoria.png'
import Header from '../../components/Header'

const product: ProductIten[] = [
  {
    image: sushi,
    emphasis: true,
    type: 'Japonesa',
    title: 'Hioki Sushi',
    avaliable: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 1
  },
  {
    image: tattoria,
    emphasis: false,
    type: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    avaliable: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 2
  },
  {
    image: tattoria,
    emphasis: false,
    type: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    avaliable: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 3
  },
  {
    image: tattoria,
    emphasis: false,
    type: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    avaliable: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 4
  },
  {
    image: tattoria,
    emphasis: false,
    type: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    avaliable: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 5
  },
  {
    image: tattoria,
    emphasis: true,
    type: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    avaliable: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 6
  }
]

const Home = () => (
  <>
    <Header />
    <ProductList products={product} cardback="white" colunsgrid="home" />
  </>
)

export default Home
