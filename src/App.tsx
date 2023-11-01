import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Rotas from './routes'

import Footer from './components/Footer'
import store from './components/store/configureStore'
import Cart from './components/cart'

import { GlobalCss } from './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
