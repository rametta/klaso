[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# 🍷 Klaso

A functional alternative to stateful components in React.

### Basic

```js
import klaso from 'klaso'

const MyButton = ({ count, inc }) => <button onClick={inc}>{count}</button>

const MyButtonEnhanced = klaso ({
  state: { count: 5 }
  methods: ctx => ({
    inc: () => ctx.setState({ count: ctx.state.count + 1 })
  })
}) (MyButton)
```

### Using Lifecycles

```js
import klaso from 'klaso'

const MyButton = () => <button>Click me</button>

const MyButtonEnhanced = klaso ({
  methods: ctx => ({
    componentDidMount: () => console.log('mounted'),
    componentDidUpdate: (prevProps, prevState, snapshot) => console.log(snapshot),
    getSnapshotBeforeUpdate: (prevProps, prevState) => console.log(prevProps, prevState),
  }),
  staticMethods: {
    getDerivedStateFromProps: (props, state) => console.log(props) || null
  }
}) (MyButton)
```