[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# 🍷 Klaso

A functional alternative to stateful components in React.

```js
import klaso from 'klaso'

const MyButton = <button>Click me</button>

const MyButtonEnhanced = klaso(MyButton, ctx => ({
  componentDidMount: () => console.log('mounted'),
}))
```

Also supports local state, local methods and static methods.
