import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'

import { isOpenCart } from '../store/reducers/reducerCart'
import { RootReducer } from '../store/configureStore'

import logo from '../../assets/images/logo.png'
import backgroundHP from '../../assets/images/perfil.png'

import * as S from './styles'

const HeaderPerfil = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(isOpenCart())
  }

  return (
    <S.ContainerHeaderP style={{ backgroundImage: `url(${backgroundHP})` }}>
      <S.ContainerLinks className="container">
        <Link to="/">Restaurantes</Link>
        <img src={logo} alt="efood" />
        <Button onClick={openCart} type="button" title="Produto(s) no carrinho">
          {items.length} - produto(s) no carrinho
        </Button>
      </S.ContainerLinks>
      <S.Mobile className="container">
        <Link to="/">
          <img src={logo} alt="efood" />
        </Link>

        <div className="cart">
          <button onClick={openCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </button>
          <span>{items.length}</span>
        </div>
      </S.Mobile>
    </S.ContainerHeaderP>
  )
}
export default HeaderPerfil
