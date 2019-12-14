/*! For license information please see b94ec4b0.812ebd3e.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(1),r=n(8),s=(n(0),n(125)),o=n(128),c=n(129),i={id:"tutorial-01",title:"Tutorial - Person Name with useState",sidebar_label:"Person Name (useState)"},l=[{value:"src/App.js",id:"srcappjs",children:[]},{value:"src/store.js",id:"srcstorejs",children:[]},{value:"src/EditPerson.js",id:"srceditpersonjs",children:[]},{value:"src/ShowPerson.js",id:"srcshowpersonjs",children:[]},{value:"src/utils.js",id:"srcutilsjs",children:[]},{value:"CodeSandbox",id:"codesandbox",children:[]}],u={rightToc:l},p="wrapper";function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)(p,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This tutorial shows tiny example code with useState."),Object(s.b)("h2",{id:"srcappjs"},"src/App.js"),Object(s.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(c.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\nimport { Provider } from './store';\nimport EditPerson from './EditPerson';\nimport ShowPerson from './ShowPerson';\n\nconst App = () => (\n  <Provider>\n    <EditPerson />\n    <ShowPerson />\n  </Provider>\n);\n\nexport default App;\n\n"))),Object(s.b)(c.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\n\nimport { Provider } from './store';\nimport EditPerson from './EditPerson';\nimport ShowPerson from './ShowPerson';\n\nconst App: React.FC = () => (\n  <Provider>\n    <EditPerson />\n    <ShowPerson />\n  </Provider>\n);\n\nexport default App;\n\n")))),Object(s.b)("p",null,"This is the root component."),Object(s.b)("h2",{id:"srcstorejs"},"src/store.js"),Object(s.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(c.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { useState } from 'react';\nimport { createContainer } from 'react-tracked';\n\nconst useValue = () => useState({});\n\nexport const {\n  Provider,\n  useTrackedState,\n  useUpdate: useSetState,\n} = createContainer(useValue);\n\n"))),Object(s.b)(c.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { useState } from 'react';\nimport { createContainer } from 'react-tracked';\n\nexport type State = {\n  firstName?: string;\n  lastName?: string;\n};\n\nconst useValue = () => useState<State>({});\n\nexport const {\n  Provider,\n  useTrackedState,\n  useUpdate: useSetState,\n} = createContainer(useValue);\n\n")))),Object(s.b)("p",null,"The store is created by useState.\nuseUpdate is renamed to useSetState for exporting."),Object(s.b)("h2",{id:"srceditpersonjs"},"src/EditPerson.js"),Object(s.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(c.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\nimport { useSetState, useTrackedState } from './store';\n\nconst EditPerson = () => {\n  const setState = useSetState();\n  const state = useTrackedState();\n  const setFirstName = e => {\n    const firstName = e.target.value;\n    setState(prev => ({ ...prev, firstName }));\n  };\n  const setLastName = e => {\n    const lastName = e.target.value;\n    setState(prev => ({ ...prev, lastName }));\n  };\n  return (\n    <div>\n      <div>\n        First Name:\n        <input value={state.firstName || ''} onChange={setFirstName} />\n      </div>\n      <div>\n        Last Name:\n        <input value={state.lastName || ''} onChange={setLastName} />\n      </div>\n    </div>\n  );\n};\n\nexport default EditPerson;\n\n"))),Object(s.b)(c.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\n\nimport { useSetState, useTrackedState } from './store';\n\nconst EditPerson: React.FC = () => {\n  const setState = useSetState();\n  const state = useTrackedState();\n  const setFirstName = e => {\n    const firstName = e.target.value;\n    setState(prev => ({ ...prev, firstName }));\n  };\n  const setLastName = e => {\n    const lastName = e.target.value;\n    setState(prev => ({ ...prev, lastName }));\n  };\n  return (\n    <div>\n      <div>\n        First Name:\n        <input value={state.firstName || ''} onChange={setFirstName} />\n      </div>\n      <div>\n        Last Name:\n        <input value={state.lastName || ''} onChange={setLastName} />\n      </div>\n    </div>\n  );\n};\n\nexport default EditPerson;\n\n")))),Object(s.b)("p",null,"This component is to edit person object."),Object(s.b)("h2",{id:"srcshowpersonjs"},"src/ShowPerson.js"),Object(s.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(c.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import React, { useState } from 'react';\n\nimport { useTrackedState } from './store';\nimport { useFlasher } from './utils';\n\nconst ShowPerson = () => {\n  const state = useTrackedState();\n  const [onlyFirstName, setOnlyFirstName] = useState(false);\n  return (\n    <div ref={useFlasher()}>\n      <button type=\"button\" onClick={() => setOnlyFirstName(s => !s)}>\n        {onlyFirstName ? 'Showing only first name' : 'Showing full name'}\n      </button>\n      {onlyFirstName ? (\n        <div>First Name: {state.firstName}</div>\n      ) : (\n        <div>\n          Full Name: {state.firstName} {state.lastName}\n        </div>\n      )}\n    </div>\n  );\n};\n\nexport default ShowPerson;\n\n"))),Object(s.b)(c.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import React, { useState } from 'react';\n\nimport { useDispatch, useTrackedState } from './store';\nimport { useFlasher } from './utils';\n\nconst ShowPerson: React.FC = () => {\n  const state = useTrackedState();\n  const [onlyFirstName, setOnlyFirstName] = useState(false);\n  return (\n    <div ref={useFlasher()}>\n      <button type=\"button\" onClick={() => setOnlyFirstName(s => !s)}>\n        {onlyFirstName ? 'Showing only first name' : 'Showing full name'}\n      </button>\n      {onlyFirstName ? (\n        <div>First Name: {state.firstName}</div>\n      ) : (\n        <div>\n          Full Name: {state.firstName} {state.lastName}\n        </div>\n      )}\n    </div>\n  );\n};\n\nexport default ShowPerson;\n\n")))),Object(s.b)("p",null,"This is the ShowPerson component.\nIt shows only first name or full name."),Object(s.b)("h2",{id:"srcutilsjs"},"src/utils.js"),Object(s.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(c.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { useRef, useEffect } from 'react';\n\nexport const useFlasher = () => {\n  const ref = useRef(null);\n  useEffect(() => {\n    if (!ref.current) return;\n    ref.current.setAttribute(\n      'style',\n      'box-shadow: 0 0 2px 1px red; transition: box-shadow 100ms ease-out;',\n    );\n    setTimeout(() => {\n      if (!ref.current) return;\n      ref.current.setAttribute('style', '');\n    }, 300);\n  });\n  return ref;\n};\n\n"))),Object(s.b)(c.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { useRef, useEffect } from 'react';\n\nexport const useFlasher = () => {\n  const ref = useRef<HTMLLIElement>(null);\n  useEffect(() => {\n    if (!ref.current) return;\n    ref.current.setAttribute(\n      'style',\n      'box-shadow: 0 0 2px 1px red; transition: box-shadow 100ms ease-out;',\n    );\n    setTimeout(() => {\n      if (!ref.current) return;\n      ref.current.setAttribute('style', '');\n    }, 300);\n  });\n  return ref;\n};\n\n")))),Object(s.b)("p",null,"This is a utility function to show which components render."),Object(s.b)("h2",{id:"codesandbox"},"CodeSandbox"),Object(s.b)("p",null,"You can try ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://codesandbox.io/s/recursing-chatterjee-rlw9s"}),"working example"),"."))}m.isMDXComponent=!0},123:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===s)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a),s=r.a.createContext({}),o=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=o(e.components);return r.a.createElement(s.Provider,{value:t},e.children)};var i="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=o(n),p=a,m=u[c+"."+p]||u[p]||l[p]||s;return n?r.a.createElement(m,Object.assign({},{ref:t},i,{components:n})):r.a.createElement(m,Object.assign({},{ref:t},i))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[i]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<s;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},128:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(123),o=n.n(s),c=n(87),i=n.n(c);const l={left:37,right:39};t.a=function(e){const{block:t,children:n,defaultValue:s,values:c}=e,[u,p]=Object(a.useState)(s),m=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},c.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===e,className:o()("tab-item",i.a.tabItem,{"tab-item--active":u===e}),key:e,ref:e=>m.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case l.right:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l.left:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(m,e.target,e),onFocus:()=>p(e),onClick:()=>p(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===u)[0]))}},129:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);