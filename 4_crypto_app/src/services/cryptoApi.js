import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Note: Change v1 to v2 on rapid api

const cryptoApiHeaders = {
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': '6e3d52e83dmsh9bc7f70a32ec578p1f9a66jsnf3cc736d203b'
}
const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://coinranking1.p.rapidapi.com'
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${ count }`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${ coinId }`)
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${ coinId }/history?timeperiod=${ timeperiod }`),
    }),
    // Note: To access this endpoint you need premium plan
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  }),
})

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi
