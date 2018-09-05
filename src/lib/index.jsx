import { Component } from 'react'

// const config = {
//   state: {},
//   methods: ctx => ({}),
//   staticMethods: {},
// }

/**
 * klaso
 * @param {{ state: any, methods: Function, staticMethods: Object }} config 
 */
const klaso = config => render =>
  class Klaso extends Component {
    state = config.state || {}

    static displayName = render.name

    constructor(props) {
      super(props)

      Object.keys(config.staticMethods || {}).map(key => (Klaso[key] = config.staticMethods[key]))

      Object.assign(this, config.methods(this), {
        render: () => render({ ...this.props, ...this.state, ...config.methods(this) }),
      })
    }
  }

export default klaso
