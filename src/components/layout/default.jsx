import { h } from 'preact'
import Header from '~/components/header'

const LayoutDefault = ({ children }) => (
  <div className="layout__default">
    <Header />
    { children }
  </div>
)

export default LayoutDefault
