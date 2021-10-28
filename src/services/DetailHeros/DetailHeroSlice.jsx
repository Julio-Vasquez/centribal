import { createSlice } from '@reduxjs/toolkit'

export const DetailHero = 'DetailHero'

const initialStateDetailHero = {
  loadingDataDetailHero: false,
  dataHero: {},
  idHero: undefined,
  successState: false,
  errorState: false,
  success: '',
  error: '',
}

const DetailHeroSlice = createSlice({
  initialState: initialStateDetailHero,
  name: DetailHero,
  reducers: {
    getHero: (state, { payload }) => ({
      ...state,
      loadingDataDetailHero: true,
      idHero: +payload.idHero,
      dataHero: {},
      successState: false,
      errorState: false,
      success: '',
      error: '',
    }),
    getHeroFailed: (state, { payload }) => ({
      ...state,
      loadingDataDetailHero: false,
      successState: false,
      errorState: true,
      success: '',
      error: payload,
    }),
    getHeroSuccess: (state, { payload }) => ({
      ...state,
      loadingDataDetailHero: false,
      successState: true,
      errorState: false,
      success: payload.success,
      dataHero: payload.dataHero,
      idHero: +payload.dataHero.id,
      error: '',
    }),
  },
})

export const { getHero, getHeroFailed, getHeroSuccess } =
  DetailHeroSlice.actions

export default DetailHeroSlice.reducer
