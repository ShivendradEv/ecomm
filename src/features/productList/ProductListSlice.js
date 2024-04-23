import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({category,limit,skip,pagination}) => {
        if(pagination && category && limit) {
          return `/products/category/${category}?limit=${limit}&skip=${skip}`
        }

        if(category && limit) {
          return `/products/category/${category}?limit=${limit}`
        }

        if(category === '' && limit !== '') {
          return `/products?limit=${limit}`
        }
      },
    })
  })
})

export const { useGetAllProductsQuery } = productsApi;