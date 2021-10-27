import { Router, Redirect } from '@reach/router'
import { Suspense, lazy } from 'react'

import { Loading } from './../components/Loading'

const LayoutCentribal = lazy(() => import('./../layout'))
const ListHeros = lazy(() => import('../views/ListHeroes'))
const ListHerosFly = lazy(() => import('../views/ListHeroesFly'))
const DetailHero = lazy(() => import('./../views/DetailHero'))

export const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading sms="Cargando" />}>
      <LayoutCentribal>
        <Router>
          <ListHeros path="/" />
          <ListHeros path="/all-heroes" />
          <ListHerosFly path="/all-heroes-fly" />
          <DetailHero path="/detail-hero/:id" />
          <Redirect from="*" to="/" noThrow />
        </Router>
      </LayoutCentribal>
    </Suspense>
  )
}
