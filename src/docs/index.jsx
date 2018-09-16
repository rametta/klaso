import React from 'react'
import { render } from 'react-dom'
import klaso from '../../lib'

const Counter = ({ count, inc, dec }) => (
  <div>
    <button type="button" onClick={dec}>
      -
    </button>
    <div>{count}</div>
    <button type="button" onClick={inc}>
      +
    </button>
  </div>
)

const CounterEnhanced = klaso({
  state: { count: 1 },
  methods: ctx => ({
    dec: () => ctx.setState({ count: ctx.state.count - 1 }),
    inc: () => ctx.setState({ count: ctx.state.count + 1 }),
    componentDidMount: () => console.log('CounterEnhanced Mounted!')
  }),
}) (Counter)

const App = () => (
  <div>
    <h1>Counter component using Klaso</h1>
    <CounterEnhanced />
  </div>
)

render(<App />, document.getElementById('app'))
