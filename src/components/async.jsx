import { h, Component } from 'preact'

export default function (req) {
  function Async() {
    Component.call(this)

    this.state.component = null

    this.componentWillMount = () => {
      req((m) => {
        this.setState({ component: m.default || m })
      })
    }

    this.render = (props, state) => {
      const AsyncComponent = state.component
      return AsyncComponent ? <AsyncComponent {...props} /> : null
    }
  }

  (Async.prototype = new Component()).constructor = Async

  return Async
}
