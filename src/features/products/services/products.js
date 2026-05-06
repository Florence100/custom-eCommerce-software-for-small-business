import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    endpoints: (builder) => ({
        getAll: builder.query({
            query: () => 'products',
        }),
        getOne: builder.query({
            query: (id) => `products/${id}`,
        }),
        getCategories: builder.query({
            query: () => 'products/categories',
        }),
        getCategoriesList: builder.query({
            query: () => 'products/category-list',
        }),
        getByCategory: builder.query({
            query: (category) => `products/category/${category}`,
        }),
    }),
})

export const { 
    useGetAllQuery, 
    useGetOneQuery, 
    useGetCategoriesQuery, 
    useGetCategoriesListQuery, 
    useGetByCategoryQuery 
} = productsApi;