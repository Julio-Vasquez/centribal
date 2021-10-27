import { string } from 'prop-types'
import styles from './Loading.module.scss'

export const Loading = ({ sms }) => {
  return (
    <div className={styles.loading}>
      <div className={styles.loading_container}>
        <div className={`${styles.loader} ${styles.book}`}>
          <figure className={styles.page}></figure>
          <figure className={styles.page}></figure>
          <figure className={styles.page}></figure>
        </div>
        <h4>{sms}</h4>
      </div>
    </div>
  )
}

Loading.propTypes = {
  sms: string.isRequired,
}
