import { useEffect } from 'react'
import { useParams } from '@reach/router'
import { useDispatch } from 'react-redux'

import { NoMatch } from './../../components/NoMatch'
import { Loading } from './../../components/Loading'
import { DisplayHero } from './../../components/DisplayHero'
import {
  getHero,
  DetailHero as Hero,
} from './../../services/DetailHeros/DetailHeroSlice'
import { useData } from './../../hooks/useData'

const DetailHero = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    if (id) dispatch(getHero({ idHero: id }))
  }, [id, dispatch])

  const { loadingDataDetailHero, successState, dataHero } = useData({
    reducer: Hero,
  })

  if (!id) return <NoMatch />
  return loadingDataDetailHero && !successState ? (
    <Loading sms="Cargando" />
  ) : (
    <div>
      <DisplayHero data={dataHero} />
    </div>
  )
}

export default DetailHero
