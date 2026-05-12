import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    endpoints: (builder) => ({
        getAll: builder.query({
            query: ({ limit=30, sortBy='title', order='asc' }) => {
                return `products?limit=${limit}&sortBy=${sortBy}&order=${order}`
            },
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
            query: ({ category, limit=30, sortBy='title', order='asc'}) => {
                return `products/category/${category}?limit=${limit}&sortBy=${sortBy}&order=${order}`;
            },
        }),
    }),
})

export const { 
    useGetAllQuery, 
    useGetOneQuery, 
    useGetCategoriesQuery, 
    useGetCategoriesListQuery, 
    useGetByCategoryQuery,
    useSortQuery,
} = productsApi;