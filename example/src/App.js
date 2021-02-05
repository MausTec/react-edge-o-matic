import React, { useState } from 'react'
import DeviceProvider from 'react-edge-o-matic'
import { DeviceContext, ReadingsContext } from 'react-edge-o-matic'

const ConnectionForm = ({ onConnect }) => {
  const [ip, setIp] = useState("");

  const handleConnect = (e) => {
    e.preventDefault();
    onConnect(ip);
  }

  const handleChange = (e) => {
    e.preventDefault();
    setIp(e.target.value);
  }

  return (<form onSubmit={handleConnect}>
    <input type={'text'} placeholder={'Device IP'} value={ip} onChange={handleChange} />
    <input type={'submit'} />
  </form>)
}

const renderDeviceState = (state) => {
  return (
    <div className={'card'}>
      <pre>
        <code>{ JSON.stringify(state, undefined, 2) }</code>
      </pre>

      <h2>Last Reading:</h2>
      <ReadingsContext.Consumer>
        { ({ lastReading }) => <pre>
          <code>{ JSON.stringify(lastReading, undefined, 2) }</code>
        </pre>}
      </ReadingsContext.Consumer>

      { state.state === "disconnected" && <ConnectionForm onConnect={state.connect} /> }
      { state.state === "connecting" && <div>Connecting...</div> }
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
