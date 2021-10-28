import { number, string } from 'prop-types'
import { Link } from '@reach/router'
import styles from './NoMatch.module.scss'
import { Button } from 'antd'

export const NoMatch = ({ error, sms }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.error_code}>{error}</h1>
        <h2 className={styles.error_sms}>{sms}</h2>
        <Button type="primary" danger className={styles.btn_home}>
          <Link to="/">Inicio</Link>
        </Button>
      </div>
      <div className={styles.bg_img} />
    </div>
  )
}

NoMatch.propTypes = {
  error: number,
  sms: string,
}
NoMatch.defaultProps = {
  error: 404,
  sms: 'La pagina que estas buscando no existe.',
}
