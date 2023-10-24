import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Restaurant } from '../pages/Home'

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
    })
  })
})

export const { useGetFeatureRestaurantQuery, useGetRestauranteProfileQuery } =
  api
export default api
