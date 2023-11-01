import { PulseLoader } from 'react-spinners'

import { Container } from './styles'
import { Colors } from '../../styles'

const Loader = () => {
  return (
    <Container>
      <PulseLoader color={Colors.darkOrange} />
    </Container>
  )
}

export default Loader
