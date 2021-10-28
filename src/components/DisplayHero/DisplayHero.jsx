import { object } from 'prop-types'
import { Card } from 'antd'
import { Link } from '@reach/router'

export const DisplayHero = ({ data }) => {
  const { Meta } = Card
  return (
    <Link to={`/detail-hero/${data.id}`}>
      <Card cover={<img alt={data.nombre} src={data.avatarURL} />}>
        <Meta
          title={data.nombre}
          description={`${data.nombreReal} | Puede volar: ${
            data.puedeVolar ? 'Si' : 'No'
          }`}
        />
      </Card>
    </Link>
  )
}

DisplayHero.propTypes = {
  data: object.isRequired,
}
