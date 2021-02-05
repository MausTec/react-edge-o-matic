(this["webpackJsonpreact-edge-o-matic-example"]=this["webpackJsonpreact-edge-o-matic-example"]||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);n(5);var i=n(0),s=n.n(i),a=n(1),c=n.n(a),o=n(3),r=n(2),d=n.n(r);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f={ip:null,state:"disconnected",config:{},mode:"",modeDisplay:"",info:{deviceName:"",firmwareVersion:"",hardwareVersion:"",deviceSerial:""},status:{wifi:{},sd:{}},wsLog:[],_serial_cb:function(){}},v=s.a.createContext(l({},f,{connect:function(e){},send:function(e){},onSerialCmd:function(e){},dir:function(e,t){}})),g=s.a.createContext({readings:[],lastReading:{}}),b=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).ws=null,n.state={deviceContext:l({},f,{connect:n.connect.bind(h(n)),send:n.send.bind(h(n)),onSerialCmd:n.setSerialCb.bind(h(n)),dir:n.dir.bind(h(n))}),readingsContext:{readings:[],lastReading:{}}},n.nonceCb={},n.callbacks={info:n.cbInfo,configList:n.cbConfigList,serialCmd:n.cbSerialCmd,wifiStatus:n.cbWifiStatus,sdStatus:n.cbSdStatus,readings:n.cbReadings,mode:n.cbMode,dir:n.cbDir},n.handleWsOpen=n.handleWsOpen.bind(h(n)),n.handleWsClose=n.handleWsClose.bind(h(n)),n.handleWsMessage=n.handleWsMessage.bind(h(n)),n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,u(t,n);var a=i.prototype;return a.setReadingsState=function(e){void 0===e&&(e={}),this.setState({readingsContext:l({},this.state.readingsContext,e)})},a.setDeviceState=function(e){void 0===e&&(e={}),this.setState({deviceContext:l({},this.state.deviceContext,e)})},a.cbDir=function(e){},a.cbInfo=function(e){this.setDeviceState({info:{deviceName:e.device,firmwareVersion:e.fwVersion,hardwareVersion:e.hwVersion,deviceSerial:e.serial}})},a.cbConfigList=function(e){this.setDeviceState({config:e})},a.cbSerialCmd=function(e){var t=e.text,n=e.nonce;this.state.deviceContext._serial_cb&&this.state.deviceContext._serial_cb({text:t,nonce:n})},a.cbWifiStatus=function(e){this.setDeviceState({status:l({},this.state.deviceContext.status,{wifi:e})})},a.cbSdStatus=function(e){this.setDeviceState({status:l({},this.state.deviceContext.status,{sd:e})})},a.cbReadings=function(e){var t=[].concat(this.state.readingsContext.readings);t.length>=100&&t.shift(),t.push(e),this.setReadingsState({readings:t,lastReading:e})},a.cbMode=function(e){this.setDeviceState({mode:e.text.toLowerCase(),modeDisplay:e.text})},a.dir=function(e,t){this.send({dir:{path:e,nonce:t}})},a.mknonce=function(e){var t=Math.floor(1e6*Math.random());return this.nonceCb[t]=e,t},a.send=function(e){var t=this;this.ws&&(Object.keys(e).forEach((function(n){e[n]&&"function"===typeof e[n].nonce&&(e[n].nonce=t.mknonce(e[n].nonce))})),this.setDeviceState({wsLog:[].concat(this.state.deviceContext.wsLog,[{send:e}])}),this.ws.sendMessage(JSON.stringify(e)))},a.connect=function(e){var t="connecting";e?e===this.state.deviceContext.ip&&(t=this.state.deviceContext.state):t="disconnected",this.setDeviceState({ip:e,state:t})},a.handleWsOpen=function(){this.setDeviceState({state:"connected"}),this.send({streamReadings:!0}),this.send({info:null}),this.send({configList:null}),console.log("Connected")},a.handleWsClose=function(){this.setDeviceState({state:"disconnected"}),console.log("Closed.")},a.handleWsMessage=function(e){var t,n=this,i=this;try{t=JSON.parse(e)}catch(a){t={data:e},console.warn(a)}if(!t.readings){var s=[].concat(this.state.deviceContext.wsLog);s.length>=100&&s.shift(),this.setDeviceState({wsLog:[].concat(s,[{recv:e}])})}Object.keys(t).forEach((function(e){var s=t[e];s&&(s.nonce&&n.nonceCb[s.nonce]&&(n.nonceCb[s.nonce](s),delete n.nonceCb[s.nonce]),s.error&&console.error(s.error)),n.callbacks[e]?n.callbacks[e].bind(i)(s):console.warn("Received unknown command from device: ",e,t[e])}))},a.setSerialCb=function(e){this.setDeviceState({_serial_cb:e})},a.render=function(){var e=this,t="ws"+window.location.protocol.slice(4);return s.a.createElement(v.Provider,{value:this.state.deviceContext},s.a.createElement(g.Provider,{value:this.state.readingsContext},this.state.deviceContext.ip&&s.a.createElement(d.a,{url:t+"//"+this.state.deviceContext.ip,onOpen:this.handleWsOpen,onClose:this.handleWsClose,ref:function(t){return e.ws=t},debug:!0,onMessage:this.handleWsMessage}),this.props.children))},i}(i.Component);const p=({onConnect:e})=>{const t=Object(i.useState)(""),n=Object(o.a)(t,2),a=n[0],c=n[1];return s.a.createElement("form",{onSubmit:t=>{t.preventDefault(),e(a)}},s.a.createElement("input",{type:"text",placeholder:"Device IP",value:a,onChange:e=>{e.preventDefault(),c(e.target.value)}}),s.a.createElement("input",{type:"submit"}))},m=e=>s.a.createElement("div",{className:"card"},s.a.createElement("pre",null,s.a.createElement("code",null,JSON.stringify(e,void 0,2))),s.a.createElement("h2",null,"Last Reading:"),s.a.createElement(g.Consumer,null,({lastReading:e})=>s.a.createElement("pre",null,s.a.createElement("code",null,JSON.stringify(e,void 0,2)))),"disconnected"===e.state&&s.a.createElement(p,{onConnect:e.connect}),"connecting"===e.state&&s.a.createElement("div",null,"Connecting..."));var C=()=>s.a.createElement(b,null,s.a.createElement(v.Consumer,null,m));c.a.render(s.a.createElement(C,null),document.getElementById("root"))},4:function(e,t,n){e.exports=n(12)},5:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.23b8a8c9.chunk.js.map