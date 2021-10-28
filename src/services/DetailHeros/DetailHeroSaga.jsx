import { all, put, takeLatest } from 'redux-saga/effects'

import { getHero, getHeroFailed, getHeroSuccess } from './DetailHeroSlice'

import { GET } from './../../common/api'

function* FetchGetHero({ payload: { idHero } }) {
  const res = yield GET({ url: `/${idHero}` })
  console.log(res)
  yield put(
    res?.ok && res?.status === 200
      ? getHeroSuccess({
          success: res.statusText,
          dataHero: res.payload,
        })
      : getHeroFailed(res.statusText)
  )
}

function* ActionWatcher() {
  yield takeLatest(getHero, FetchGetHero)
}

export default function* DetailHeroSaga() {
  yield all([ActionWatcher()])
}
