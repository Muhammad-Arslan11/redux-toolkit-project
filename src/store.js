import React from 'react'
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './TodoSlice'

// create store
export const store = configureStore({
    reducer: todoReducer
});


    