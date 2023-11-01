import ProductList from '../../components/ProductList'
import Header from '../../components/Header'
import Loader from '../../components/Loader'

import { useGetFeatureRestaurantQuery } from '../../service/api'

const Home = () => {
  const { data: restaurat } = useGetFeatureRestaurantQuery()

  if (restaurat) {
    return (
      <>
        <Header />
        <ProductList products={restaurat} />
      </>
    )
  }

  return <Loader />
}

export default Home
