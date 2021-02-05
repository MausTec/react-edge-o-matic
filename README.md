# react-edge-o-matic

> React component provider for connecting to Edge-o-Matic devices!

[![NPM](https://img.shields.io/npm/v/react-edge-o-matic.svg)](https://www.npmjs.com/package/react-edge-o-matic) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-edge-o-matic
```

## Usage

This exposes device state via the new React Context API. See the `example/`
directory for a project that can connect to the device and print state.

More docs forthcoming.

```jsx
import React, { useState } from 'react'
import DeviceProvider from 'react-edge-o-matic'
import { DeviceContext } from 'react-edge-o-matic'

const renderDeviceState = (state) => {
  return (
    <div className={'card'}>
      <pre>
        <code>{ JSON.stringify(state, undefined, 2) }</code>
      </pre>
    </div>
  )
}

const App = () => {
  return <DeviceProvider>
    <DeviceContext.Consumer>
      { renderDeviceState }
    </DeviceContext.Consumer>
  </DeviceProvider>
}

export default App
```

## License

MIT © [MausTec](https://github.com/MausTec)
