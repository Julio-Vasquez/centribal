import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { List } from 'antd'

import { Loading } from '../../components/Loading'

import { useData } from './../../hooks/useData'
import { getAllHeros, Heros } from './../../services/Heros/HerosSlice'
import { DisplayHero } from '../../components/DisplayHero'

const ListHerosFly = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllHeros({ url: '?fly=true' }))
  }, [dispatch])

  const { loadingDataHeros, successState, dataHeros } = useData({
    reducer: Heros,
  })

  console.log(loadingDataHeros)
  return loadingDataHeros || !successState ? (
    <Loading sms="Cargando" />
  ) : (
    <div>
      <List
        dataSource={dataHeros}
        bordered
        header={<h2>Listado de Heroes que pueden volar</h2>}
        size="default"
        renderItem={hero => <DisplayHero data={hero} />}
        pagination={{
          pageSize: 5,
        }}
      />
    </div>
  )
}

export default ListHerosFly
