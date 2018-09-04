import React from 'react'
import { render } from 'react-dom'
import klaso from '../../lib'

const Jason = () => <div>Jason</div>

const JasonEnhanced = klaso(
  Jason,
  ctx => ({
    state: { test: 8 },
    componentDidMount: () => console.log(ctx),
    hello: () => console.log('hello'),
  })
  // {
  //   getDerivedStateFromProps: (props, state) => console.log(props, state) || null,
  //   somethingElse: () => console.log,
  // }
)

const App = () => (
  <div>
    <h1>Exmaple component using Klaso</h1>
    <JasonEnhanced />
  </div>
)

render(<App />, document.getElementById('app'))
