import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    adrress: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment?: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeatureRestaurant: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getRestauranteProfile: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchass: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeatureRestaurantQuery,
  useGetRestauranteProfileQuery,
  usePurchassMutation
} = api
export default api
