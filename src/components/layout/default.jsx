import { h, Component } from 'preact'
import Header from '~/components/header'

export default class LayoutDefault extends Component {
  componentDidMount() {
    this.forceUpdate()
  }

  render({ children }) {
    return (
      <div className="layout__default">
        <Header />
        { children }
      </div>
    )
  }
}
