import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { List } from 'antd'

import { Loading } from '../../components/Loading'

import { useData } from './../../hooks/useData'
import { getAllHeros, Heros } from './../../services/Heros/HerosSlice'
import { DisplayHero } from '../../components/DisplayHero'

const ListHeros = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllHeros({ url: '' }))
  }, [dispatch])

  const { loadingDataHeros, successState, dataHeros } = useData({
    reducer: Heros,
  })

  return loadingDataHeros || !successState ? (
    <Loading sms="Cargando" />
  ) : (
    <div>
      <List
        dataSource={dataHeros}
        bordered
        header={<h2>Listado de Heroes</h2>}
        size="default"
        renderItem={hero => <DisplayHero data={hero} />}
        pagination={{
          pageSize: 5,
          onChange: () => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
          },
        }}
      />
    </div>
  )
}

export default ListHeros
