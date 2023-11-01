import { HeaderContainer, Title } from './styles'
import PhotoHome from '../../assets/images/home.png'
import efood from '../../assets/images/logo.png'

const Header = () => {
  return (
    <HeaderContainer style={{ backgroundImage: `url(${PhotoHome})` }}>
      <img src={efood} alt="efood" />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </HeaderContainer>
  )
}

export default Header
