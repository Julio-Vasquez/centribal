import { combineReducers } from '@reduxjs/toolkit'

const AppReducer = combineReducers({})

const RootReducer = (state, action) => AppReducer(state, action)

export default RootReducer
