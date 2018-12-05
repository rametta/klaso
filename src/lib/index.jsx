import React, { Component } from 'react'

/**
 * klaso
 * @param {{ state?: any, displayName?: String, methods: Function, staticMethods?: Object }} config
 */
const klaso = config => Wrapper => 
  class extends Component {
    state = config.state || {}

    static displayName = config.displayName || `Klaso(${Wrapper.displayName || Wrapper.name || 'Component'})` 

    static getDerivedStateFromProps(state, props) {
      return config.staticMethods ? config.staticMethods.getDerivedStateFromProps(state, props) : null
    }

    constructor(props) {
      super(props)
      config.init && config.init(this)
      Object.assign(this, config.methods(this))
    }

    render() {
      return <Wrapper {...this.props} {...this.state} {...config.methods(this)}/>
    }
  }


export default klaso
