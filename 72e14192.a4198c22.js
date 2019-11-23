/*! For license information please see 72e14192.a4198c22.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a),c=r.a.createContext({}),o=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=o(e.components);return r.a.createElement(c.Provider,{value:t},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},i=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),i=o(n),u=a,b=i[s+"."+u]||i[u]||p[u]||c;return n?r.a.createElement(b,Object.assign({},{ref:t},l,{components:n})):r.a.createElement(b,Object.assign({},{ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=i;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<c;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}i.displayName="MDXCreateElement"},110:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===c)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},113:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(110),o=n.n(c);t.a=function(e){const{block:t,children:n,defaultValue:c,values:s}=e,[l,p]=Object(a.useState)(c);return r.a.createElement("div",null,r.a.createElement("ul",{className:o()("tabs",{"tabs--block":t})},s.map(({value:e,label:t})=>r.a.createElement("li",{className:o()("tab-item",{"tab-item--active":l===e}),key:e,onClick:()=>p(e)},t))),r.a.createElement("div",{className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===l)[0]))}},114:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));n(0);var a=n(109),r=n(113),c=n(114);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const s={id:"quick-start",title:"Quick Start",sidebar_label:"Quick Start"},l=[{value:"Create a new app",id:"create-a-new-app",children:[]},{value:"Create a global state with pure React",id:"create-a-global-state-with-pure-react",children:[]},{value:"Performance issue with pure React",id:"performance-issue-with-pure-react",children:[]},{value:"Install React Tracked",id:"install-react-tracked",children:[]},{value:"Use React Tracked instead of bare context",id:"use-react-tracked-instead-of-bare-context",children:[]}],p={rightToc:l},i="wrapper";function u({components:e,...t}){return Object(a.b)(i,o({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Let's try a minimal example from scratch."),Object(a.b)("h2",{id:"create-a-new-app"},"Create a new app"),Object(a.b)("p",null,"Use ",Object(a.b)("a",o({parentName:"p"},{href:"https://create-react-app.dev"}),"create-react-app")," to create a new app."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"npx create-react-app my-app # Add --typescript for TypeScript\n")),Object(a.b)("p",null,"Run the app."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"cd my-app\nnpm start # Or yarn start\n")),Object(a.b)("h2",{id:"create-a-global-state-with-pure-react"},"Create a global state with pure React"),Object(a.b)("p",null,"Now, we create a global state that contains a number and a string."),Object(a.b)("p",null,"Create a new file ",Object(a.b)("inlineCode",{parentName:"p"},"./src/store.js"),". (",Object(a.b)("inlineCode",{parentName:"p"},"./src/store.tsx")," for TypeScript)"),Object(a.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs1574523517715"},Object(a.b)(c.a,{value:"js",mdxType:"TabItem1574523517715"},Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import React, { createContext, useState, useContext } from 'react';\n\nconst initialState = {\n  count: 0,\n  text: 'hello',\n};\n\nconst useMyState = () => useState(initialState);\n\nconst MyContext = createContext(null);\n\nexport const useSharedState = () => {\n  const value = useContext(MyContext);\n  if (value === null) throw new Error('Please add SharedStateProvider');\n  return value;\n};\n\nexport const SharedStateProvider = ({ children }) => (\n  <MyContext.Provider value={useMyState()}>{children}</MyContext.Provider>\n);\n\n"))),Object(a.b)(c.a,{value:"ts",mdxType:"TabItem1574523517715"},Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"import React, { createContext, useState, useContext } from 'react';\n\nconst initialState = {\n  count: 0,\n  text: 'hello',\n};\n\nconst useMyState = () => useState(initialState);\n\nconst MyContext = createContext<ReturnType<typeof useMyState> | null>(null);\n\nexport const useSharedState = () => {\n  const value = useContext(MyContext);\n  if (value === null) throw new Error('Please add SharedStateProvider');\n  return value;\n};\n\nexport const SharedStateProvider: React.FC = ({ children }) => (\n  <MyContext.Provider value={useMyState()}>{children}</MyContext.Provider>\n);\n\n")))),Object(a.b)("p",null,"Create a new file ",Object(a.b)("inlineCode",{parentName:"p"},"./src/Counter.js"),". (",Object(a.b)("inlineCode",{parentName:"p"},"./src/Counter.tsx")," for TypeScript)"),Object(a.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs1574523517715"},Object(a.b)(c.a,{value:"js",mdxType:"TabItem1574523517715"},Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\nimport { useSharedState } from './store';\n\nconst Counter = () => {\n  const [state, setState] = useSharedState();\n  const increment = () => {\n    setState(prev => ({ ...prev, count: prev.count + 1 }));\n  };\n  return (\n    <div>\n      {state.count}\n      <button onClick={increment}>+1</button>\n    </div>\n  );\n};\n\nexport default Counter;\n\n"))),Object(a.b)(c.a,{value:"ts",mdxType:"TabItem1574523517715"},Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\n\nimport { useSharedState } from './store';\n\nconst Counter: React.FC = () => {\n  const [state, setState] = useSharedState();\n  const increment = () => {\n    setState(prev => ({ ...prev, count: prev.count + 1 }));\n  };\n  return (\n    <div>\n      {state.count}\n      <button onClick={increment}>+1</button>\n    </div>\n  );\n};\n\nexport default Counter;\n\n")))),Object(a.b)("p",null,"Create a new file ",Object(a.b)("inlineCode",{parentName:"p"},"./src/TextBox.js"),". (",Object(a.b)("inlineCode",{parentName:"p"},"./src/TextBox.tsx")," for TypeScript)"),Object(a.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs1574523517715"},Object(a.b)(c.a,{value:"js",mdxType:"TabItem1574523517715"},Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\nimport { useSharedState } from './store';\n\nconst TextBox = () => {\n  const [state, setState] = useSharedState();\n  const setText = text => {\n    setState(prev => ({ ...prev, text }));\n  };\n  return (\n    <div>\n      {state.text}\n      <input value={state.text} onChange={e => setText(e.target.value)} />\n    </div>\n  );\n};\n\nexport default TextBox;\n\n"))),Object(a.b)(c.a,{value:"ts",mdxType:"TabItem1574523517715"},Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\n\nimport { useSharedState } from './store';\n\nconst TextBox: React.FC = () => {\n  const [state, setState] = useSharedState();\n  const setText = (text: string) => {\n    setState(prev => ({ ...prev, text }));\n  };\n  return (\n    <div>\n      {state.text}\n      <input value={state.text} onChange={e => setText(e.target.value)} />\n    </div>\n  );\n};\n\nexport default TextBox;\n\n")))),Object(a.b)("p",null,"Finally, modify the file ",Object(a.b)("inlineCode",{parentName:"p"},"./src/App.js"),". (",Object(a.b)("inlineCode",{parentName:"p"},"./src/App.tsx")," for TypeScript)"),Object(a.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs1574523517715"},Object(a.b)(c.a,{value:"js",mdxType:"TabItem1574523517715"},Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\nimport logo from './logo.svg';\nimport './App.css';\n\nimport { SharedStateProvider } from './store';\nimport Counter from './Counter';\nimport TextBox from './TextBox';\n\nconst App = () => (\n  <SharedStateProvider>\n    <div className=\"App\">\n      <header className=\"App-header\">\n        <Counter />\n        <TextBox />\n        <img src={logo} className=\"App-logo\" alt=\"logo\" />\n      </header>\n    </div>\n  </SharedStateProvider>\n);\n\nexport default App;\n\n"))),Object(a.b)(c.a,{value:"ts",mdxType:"TabItem1574523517715"},Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\nimport logo from './logo.svg';\nimport './App.css';\n\nimport { SharedStateProvider } from './store';\nimport Counter from './Counter';\nimport TextBox from './TextBox';\n\nconst App: React.FC = () => (\n  <SharedStateProvider>\n    <div className=\"App\">\n      <header className=\"App-header\">\n        <Counter />\n        <TextBox />\n        <img src={logo} className=\"App-logo\" alt=\"logo\" />\n      </header>\n    </div>\n  </SharedStateProvider>\n);\n\nexport default App;\n\n")))),Object(a.b)("p",null,"Check the running app again and see how the counter and the text box work."),Object(a.b)("h2",{id:"performance-issue-with-pure-react"},"Performance issue with pure React"),Object(a.b)("p",null,"Our app works totally fine.\nBut if a shared state becomes very big,\nwe may experience a drop in performance.\nThis is because all components that use the shared state\nwill re-render even if only a small part of the shared state is changed."),Object(a.b)("p",null,"React Tracked solves this issue without efforts."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: In pure React, it's recommended to split context into pieces. Check out ",Object(a.b)("a",o({parentName:"p"},{href:"https://blog.axlight.com/posts/4-options-to-prevent-extra-rerenders-with-react-context/"}),"this")," or ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.basefactor.com/global-state-with-react"}),"that")," for more information.")),Object(a.b)("h2",{id:"install-react-tracked"},"Install React Tracked"),Object(a.b)("p",null,"It's time to try React Tracked.\nLet's install the library."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"npm install react-tracked # Or yarn add react-tracked\n")),Object(a.b)("h2",{id:"use-react-tracked-instead-of-bare-context"},"Use React Tracked instead of bare context"),Object(a.b)("p",null,"It's very simple.\nModify the file ",Object(a.b)("inlineCode",{parentName:"p"},"./src/store.js"),". (",Object(a.b)("inlineCode",{parentName:"p"},"./src/store.tsx")," for TypeScript)"),Object(a.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs1574523517715"},Object(a.b)(c.a,{value:"js",mdxType:"TabItem1574523517715"},Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import { useState } from 'react';\nimport { createContainer } from 'react-tracked';\n\nconst initialState = {\n  count: 0,\n  text: 'hello',\n};\n\nconst useMyState = () => useState(initialState);\n\nexport const {\n  Provider: SharedStateProvider,\n  useTracked: useSharedState,\n} = createContainer(useMyState);\n\n"))),Object(a.b)(c.a,{value:"ts",mdxType:"TabItem1574523517715"},Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"import { useState } from 'react';\nimport { createContainer } from 'react-tracked';\n\nconst initialState = {\n  count: 0,\n  text: 'hello',\n};\n\nconst useMyState = () => useState(initialState);\n\nexport const {\n  Provider: SharedStateProvider,\n  useTracked: useSharedState,\n} = createContainer(useMyState);\n\n")))),Object(a.b)("p",null,"That's it. Check the running app and see it works as before."),Object(a.b)("p",null,"How can we see the difference?\nYou could add ",Object(a.b)("inlineCode",{parentName:"p"},"console.log")," in render (which is technically a side effect),\nor add ",Object(a.b)("inlineCode",{parentName:"p"},"{Math.random()}")," in JSX which is easier."),Object(a.b)("p",null,"For example, modify the Counter component like this."),Object(a.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs1574523517715"},Object(a.b)(c.a,{value:"js",mdxType:"TabItem1574523517715"},Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"const Counter = () => {\n  const [state, setState] = useSharedState();\n  const increment = () => {\n    setState(prev => ({ ...prev, count: prev.count + 1 }));\n  };\n  return (\n    <div>\n      {state.count}\n      <button onClick={increment}>+1</button>\n      {Math.random()}\n    </div>\n  );\n};\n\n"))),Object(a.b)(c.a,{value:"ts",mdxType:"TabItem1574523517715"},Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"const Counter: React.FC = () => {\n  const [state, setState] = useSharedState();\n  const increment = () => {\n    setState(prev => ({ ...prev, count: prev.count + 1 }));\n  };\n  return (\n    <div>\n      {state.count}\n      <button onClick={increment}>+1</button>\n      {Math.random()}\n    </div>\n  );\n};\n\n")))),Object(a.b)("p",null,"With this, try both pure React version and React Tracked version."),Object(a.b)("p",null,"In the React Tracked version,\nthe random number only changes when clicking the increment button.\nIt won't change when typing in the text box."))}u.isMDXComponent=!0}}]);