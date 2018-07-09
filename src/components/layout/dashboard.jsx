import { h, Component } from 'preact'

export default class Dashboard extends Component {
  render({ children }) {
    return (
      <div className="layout__dashboard">
        { children }
      </div>
    )
  }
}
