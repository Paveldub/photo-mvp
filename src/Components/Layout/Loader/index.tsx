import classnames from 'classnames'
import Spinner from '../../Common/Spinner'
import './styles.scss'

export function Loading({ className = '' }) {
  return (
    <div className={classnames('loading', className)}>
      <Spinner />
    </div>
  )
}
