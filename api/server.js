// api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mealApi = createApi({
  reducerPath: 'mealApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/api/json/v1/1/' }),
  endpoints: builder => ({
    getMeals: builder.query({
      query: () => 'search.php?s='
    })
  })
});

export const { useGetMealsQuery } = mealApi;
