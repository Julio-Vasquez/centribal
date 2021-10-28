import { createSlice } from '@reduxjs/toolkit'

export const Heros = 'Heros'

const initialStateHeroes = {
  loadingDataHeros: false,
  dataHeros: [],
  successState: false,
  errorState: false,
  success: '',
  error: '',
}

const HerosSlice = createSlice({
  initialState: initialStateHeroes,
  name: Heros,
  reducers: {
    getAllHeros: state => ({
      ...state,
      loadingDataHeros: true,
      successState: false,
      errorState: false,
      success: '',
      error: '',
    }),
    getAllHerosFailed: (state, { payload }) => ({
      ...state,
      loadingDataHeros: false,
      successState: false,
      errorState: true,
      success: '',
      error: payload,
    }),
    getAllHerosSuccess: (state, { payload }) => ({
      ...state,
      loadingDataHeros: false,
      successState: true,
      errorState: false,
      dataHeros: payload.data,
      success: payload.success,
      error: '',
    }),
  },
})

export const { getAllHeros, getAllHerosFailed, getAllHerosSuccess } =
  HerosSlice.actions

export default HerosSlice.reducer
