import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Products from '../Products'

import * as S from './styles'

export type Props = {
  products: Restaurant[]
}

const ProductList = ({ products }: Props) => {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.matchMedia({
      '(max-width: 799px)': function () {
        gsap.to('.productList3', {
          x: 0,
          opacity: 1
        })
        gsap.to('.productList4', {
          x: 0,
          opacity: 1
        })
        gsap.to('.productList5', {
          x: 0,
          opacity: 1
        })

        gsap.to('.productList6', {
          x: 0,
          opacity: 1
        })
      }
    })

    gsap.to('.productList3, .productList4', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.productList2',
        endTrigger: '.productList4',
        start: 'top: 100px',
        end: 'bottom: 50px',
        scrub: true
      }
    })
    gsap.to('.productList5, .productList6', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.productList4',
        endTrigger: '.productList6',
        start: 'top: 0px',
        end: 'bottom: -200px',
        scrub: true
      }
    })

    return () => {
      gsap.killTweensOf('.productList2, .productList6')
    }
  }, [])

  return (
    <S.Carts className="container">
      <S.List>
        {products.map((product, id) => (
          <li className={`productList${product.id}`} key={product.id}>
            <Products
              id={product.id}
              title={product.titulo}
              image={product.capa}
              avaliable={product.avaliacao}
              emphasis={product.destacado}
              type={product.tipo}
              description={product.descricao}
            />
          </li>
        ))}
      </S.List>
    </S.Carts>
  )
}

export default ProductList
