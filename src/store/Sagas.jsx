import { fork, all } from 'redux-saga/effects'

import HerosSaga from '../services/Heros/HerosSaga'
import DetailHeroSaga from '../services/DetailHeros/DetailHeroSaga'

function* RootSagas() {
  yield all([fork(HerosSaga), fork(DetailHeroSaga)])
}

export default RootSagas
