import { Component } from 'react'

const klaso = (render, instanceMethods, staticMethods = {}) =>
  class Klaso extends Component {
    static displayName = render.name

    constructor(props) {
      super(props)

      Object.keys(staticMethods).map(key => (Klaso[key] = staticMethods[key]))

      Object.assign(this, instanceMethods(this), {
        render: () => render({ ...this.props, ...this.state }),
      })
    }
  }

export default klaso
