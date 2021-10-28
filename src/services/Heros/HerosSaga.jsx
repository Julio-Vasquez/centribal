import { all, put, takeLatest } from 'redux-saga/effects'

import {
  getAllHeros,
  getAllHerosFailed,
  getAllHerosSuccess,
} from './HerosSlice'

import { GET } from './../../common/api'

function* FetchGetAllHeros({ payload: { url } }) {
  const res = yield GET({ url: url })
  yield put(
    res?.ok && res?.status === 200
      ? getAllHerosSuccess({
          success: res.statusText,
          data: res.payload,
        })
      : getAllHerosFailed(payload.statusText)
  )
}

function* ActionWatcher() {
  yield takeLatest(getAllHeros, FetchGetAllHeros)
}

export default function* HerosSaga() {
  yield all([ActionWatcher()])
}
