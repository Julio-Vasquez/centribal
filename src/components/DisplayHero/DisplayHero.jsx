import { object } from 'prop-types'
import { Card } from 'antd'
import { Link } from '@reach/router'
import {cards, content} from './DisplayHero.module.scss'

export const DisplayHero = ({ data }) => {
  const { Meta } = Card
  return (
    <Link to={`/detail-hero/${data.id}`}>
      <div className={content}>
      <Card className={cards} cover={<img alt={data.nombre} src={data.avatarURL} />}>
        <Meta
          title={data.nombre}
          description={`${data.nombreReal} | Puede volar: ${
            data.puedeVolar ? 'Si' : 'No'
          }`}
        />
      </Card>
      </div>
    </Link>
  )
}

DisplayHero.propTypes = {
  data: object.isRequired,
}
