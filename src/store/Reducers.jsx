import { combineReducers } from '@reduxjs/toolkit'

import HerosReducer, { Heros } from './../services/Heros/HerosSlice'
import DetailHeroReducer, {
  DetailHero,
} from './../services/DetailHeros/DetailHeroSlice'

const AppReducer = combineReducers({
  [DetailHero]: DetailHeroReducer,
  [Heros]: HerosReducer,
})

const RootReducer = (state, action) => AppReducer(state, action)

export default RootReducer
