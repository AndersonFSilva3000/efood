import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Products from '../Products'

import * as S from './styles'
import { Restaurant } from '../../pages/Home'

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
          opacity: 1,
          scrollTrigger: {
            trigger: '.productList2',
            markers: true,
            start: 'top: 500px',
            end: 'bottom: 350px',
            scrub: true,
            endTrigger: '.productList3'
          }
        })
        gsap.to('.productList4', {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: '.productList3',
            markers: true,
            start: 'top: 500px',
            end: 'bottom: 350px',
            scrub: true,
            endTrigger: '.productList4'
          }
        })
        gsap.to('.productList5', {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: '.productList4',
            markers: true,
            start: 'top: 500px',
            end: 'bottom:350px',
            scrub: true,
            endTrigger: '.productList5'
          }
        })

        gsap.to('.productList6', {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: '.productList5',
            endTrigger: '.productList6',
            markers: true,
            start: 'top: 500px',
            end: 'bottom: 350px',
            scrub: true
          }
        })
      }
    })

    gsap.to('.productList3, .productList4', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.productList2',
        // markers: true,
        start: 'top: -200px',
        end: 'bottom: -200px',
        scrub: true
      }
    })
    gsap.to('.productList5, .productList6', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.productList6',
        // markers: true,
        start: 'top: 100px',
        end: 'bottom: 100px',
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
