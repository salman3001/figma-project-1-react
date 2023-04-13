import { configureStore } from '@reduxjs/toolkit'
import orderNowReducer from './orderNowSlice'

export const store = configureStore({
    reducer: {
        orderNow: orderNowReducer
    },
})