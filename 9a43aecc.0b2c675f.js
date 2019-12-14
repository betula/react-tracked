/*! For license information please see 9a43aecc.0b2c675f.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var o=n(1),a=(n(0),n(125)),r=n(128),s=n(129);const i={id:"tutorial-04",title:"Tutorial - ToDo App with Async Actions",sidebar_label:"ToDo App (async)"},c=[{value:"src/App.js",id:"srcappjs",children:[]},{value:"src/store.js",id:"srcstorejs",children:[]},{value:"src/TodoList.js",id:"srctodolistjs",children:[]},{value:"src/TodoItem.js",id:"srctodoitemjs",children:[]},{value:"src/NewTodo.js",id:"srcnewtodojs",children:[]},{value:"CodeSandbox",id:"codesandbox",children:[]}],d={rightToc:c},p="wrapper";function l({components:e,...t}){return Object(a.b)(p,Object(o.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This tutorial shows example code with async actions."),Object(a.b)("h2",{id:"srcappjs"},"src/App.js"),Object(a.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(a.b)(s.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\nimport { Provider } from './store';\nimport TodoList from './TodoList';\n\nconst App = () => (\n  <Provider>\n    <TodoList />\n  </Provider>\n);\n\nexport default App;\n\n"))),Object(a.b)(s.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\n\nimport { Provider } from './store';\nimport TodoList from './TodoList';\n\nconst App: React.FC = () => (\n  <Provider>\n    <TodoList />\n  </Provider>\n);\n\nexport default App;\n\n")))),Object(a.b)("p",null,"This is the root component.\nIt wraps TodoList with Provider."),Object(a.b)("h2",{id:"srcstorejs"},"src/store.js"),Object(a.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(a.b)(s.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import { useReducerAsync } from 'use-reducer-async';\nimport { createContainer } from 'react-tracked';\n\nconst initialState = {\n  todoIds: [],\n  todoMap: {},\n  query: '',\n  pending: false,\n  error: null,\n};\n\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case 'STARTED':\n      return {\n        ...state,\n        pending: true,\n      };\n    case 'TODO_CREATED':\n      return {\n        ...state,\n        todoIds: [...state.todoIds, action.todo.id],\n        todoMap: { ...state.todoMap, [action.todo.id]: action.todo },\n        pending: false,\n      };\n    case 'TODO_UPDATED':\n      return {\n        ...state,\n        todoMap: { ...state.todoMap, [action.todo.id]: action.todo },\n        pending: false,\n      };\n    case 'TODO_DELETED': {\n      const { [action.id]: _removed, ...rest } = state.todoMap;\n      return {\n        ...state,\n        todoIds: state.todoIds.filter(id => id !== action.id),\n        todoMap: rest,\n        pending: false,\n      };\n    }\n    case 'FAILED':\n      return {\n        ...state,\n        pending: false,\n        error: action.error,\n      };\n    case 'QUERY_CHANGED':\n      return {\n        ...state,\n        query: action.query,\n      };\n    default:\n      throw new Error('unknown action type');\n  }\n};\n\nconst asyncActionHandlers = {\n  CREATE_TODO: dispatch => async action => {\n    try {\n      dispatch({ type: 'STARTED' });\n      const response = await fetch(`https://reqres.in/api/todos?delay=1`, {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({ title: action.title }),\n      });\n      const data = await response.json();\n      if (typeof data.id !== 'string') throw new Error('no id');\n      if (typeof data.title !== 'string') throw new Error('no title');\n      dispatch({ type: 'TODO_CREATED', todo: data });\n    } catch (error) {\n      dispatch({ type: 'FAILED', error });\n    }\n  },\n  TOGGLE_TODO: (dispatch, getState) => async action => {\n    try {\n      dispatch({ type: 'STARTED' });\n      const todo = getState().todoMap[action.id];\n      const body = {\n        ...todo,\n        completed: !todo.completed,\n      };\n      const response = await fetch(\n        `https://reqres.in/api/todos/${action.id}?delay=1`,\n        {\n          method: 'PUT',\n          headers: {\n            'Content-Type': 'application/json',\n          },\n          body: JSON.stringify(body),\n        },\n      );\n      const data = await response.json();\n      if (typeof data.title !== 'string') throw new Error('no title');\n      dispatch({ type: 'TODO_UPDATED', todo: { ...data, id: action.id } });\n    } catch (error) {\n      dispatch({ type: 'FAILED', error });\n    }\n  },\n  DELETE_TODO: dispatch => async action => {\n    try {\n      dispatch({ type: 'STARTED' });\n      await fetch(`https://reqres.in/api/todos/${action.id}?delay=1`, {\n        method: 'DELETE',\n      });\n      dispatch({ type: 'TODO_DELETED', id: action.id });\n    } catch (error) {\n      dispatch({ type: 'FAILED', error });\n    }\n  },\n};\n\nconst useValue = () =>\n  useReducerAsync(reducer, initialState, asyncActionHandlers);\n\nexport const {\n  Provider,\n  useTrackedState,\n  useUpdate: useDispatch,\n} = createContainer(useValue);\n\n"))),Object(a.b)(s.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Reducer } from 'react';\nimport { useReducerAsync, AsyncActionHandlers } from 'use-reducer-async';\nimport { createContainer } from 'react-tracked';\n\ntype TodoType = {\n  id: string;\n  title: string;\n  completed?: boolean;\n};\n\ntype State = {\n  todoIds: string[];\n  todoMap: { [id: string]: TodoType };\n  query: string;\n  pending: boolean;\n  error: Error | null;\n};\n\nconst initialState: State = {\n  todoIds: [],\n  todoMap: {},\n  query: '',\n  pending: false,\n  error: null,\n};\n\ntype InnerAction =\n  | { type: 'STARTED' }\n  | { type: 'TODO_CREATED'; todo: TodoType }\n  | { type: 'TODO_UPDATED'; todo: TodoType }\n  | { type: 'TODO_DELETED'; id: string }\n  | { type: 'FAILED'; error: Error };\n\ntype OuterAction = { type: 'QUERY_CHANGED'; query: string };\n\ntype Action = InnerAction | OuterAction;\n\nconst reducer: Reducer<State, Action> = (state, action) => {\n  switch (action.type) {\n    case 'STARTED':\n      return {\n        ...state,\n        pending: true,\n      };\n    case 'TODO_CREATED':\n      return {\n        ...state,\n        todoIds: [...state.todoIds, action.todo.id],\n        todoMap: { ...state.todoMap, [action.todo.id]: action.todo },\n        pending: false,\n      };\n    case 'TODO_UPDATED':\n      return {\n        ...state,\n        todoMap: { ...state.todoMap, [action.todo.id]: action.todo },\n        pending: false,\n      };\n    case 'TODO_DELETED': {\n      const { [action.id]: _removed, ...rest } = state.todoMap;\n      return {\n        ...state,\n        todoIds: state.todoIds.filter(id => id !== action.id),\n        todoMap: rest,\n        pending: false,\n      };\n    }\n    case 'FAILED':\n      return {\n        ...state,\n        pending: false,\n        error: action.error,\n      };\n    case 'QUERY_CHANGED':\n      return {\n        ...state,\n        query: action.query,\n      };\n    default:\n      throw new Error('unknown action type');\n  }\n};\n\ntype AsyncActionCreate = { type: 'CREATE_TODO'; title: string };\ntype AsyncActionToggle = { type: 'TOGGLE_TODO'; id: string };\ntype AsyncActionDelete = { type: 'DELETE_TODO'; id: string };\n\ntype AsyncAction = AsyncActionCreate | AsyncActionDelete | AsyncActionToggle;\n\nconst asyncActionHandlers: AsyncActionHandlers<\n  Reducer<State, Action>,\n  AsyncAction\n> = {\n  CREATE_TODO: dispatch => async action => {\n    try {\n      dispatch({ type: 'STARTED' });\n      const response = await fetch(`https://reqres.in/api/todos?delay=1`, {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({ title: action.title }),\n      });\n      const data = await response.json();\n      if (typeof data.id !== 'string') throw new Error('no id');\n      if (typeof data.title !== 'string') throw new Error('no title');\n      dispatch({ type: 'TODO_CREATED', todo: data });\n    } catch (error) {\n      dispatch({ type: 'FAILED', error });\n    }\n  },\n  TOGGLE_TODO: (dispatch, getState) => async action => {\n    try {\n      dispatch({ type: 'STARTED' });\n      const todo = getState().todoMap[action.id];\n      const body = {\n        ...todo,\n        completed: !todo.completed,\n      };\n      const response = await fetch(\n        `https://reqres.in/api/todos/${action.id}?delay=1`,\n        {\n          method: 'PUT',\n          headers: {\n            'Content-Type': 'application/json',\n          },\n          body: JSON.stringify(body),\n        },\n      );\n      const data = await response.json();\n      if (typeof data.title !== 'string') throw new Error('no title');\n      dispatch({ type: 'TODO_UPDATED', todo: { ...data, id: action.id } });\n    } catch (error) {\n      dispatch({ type: 'FAILED', error });\n    }\n  },\n  DELETE_TODO: dispatch => async action => {\n    try {\n      dispatch({ type: 'STARTED' });\n      await fetch(`https://reqres.in/api/todos/${action.id}?delay=1`, {\n        method: 'DELETE',\n      });\n      dispatch({ type: 'TODO_DELETED', id: action.id });\n    } catch (error) {\n      dispatch({ type: 'FAILED', error });\n    }\n  },\n};\n\nconst useValue = () =>\n  useReducerAsync<\n    Reducer<State, Action>,\n    AsyncAction,\n    AsyncAction | OuterAction\n  >(reducer, initialState, asyncActionHandlers);\n\nexport const {\n  Provider,\n  useTrackedState,\n  useUpdate: useDispatch,\n} = createContainer(useValue);\n\n")))),Object(a.b)("p",null,"This is the store we use.\nIt is a bit long and you would eventually want to split into files.\nIt defines a reducer for normal (sync) actions.\nThen, we combine it with async actioin handlers\nto create a store."),Object(a.b)("p",null,"In this example we use ",Object(a.b)("inlineCode",{parentName:"p"},"use-reducer-async")," helper hook.\nIt's a tiny custom hook, and actually it's fairly easy\nto do the same thing without the custom hook."),Object(a.b)("p",null,"You could also use ",Object(a.b)("inlineCode",{parentName:"p"},"redux-saga")," for async actions.\nFor saga users, here is ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://codesandbox.io/s/github/dai-shi/react-tracked/tree/master/examples/13_saga"}),"an example"),"."),Object(a.b)("p",null,"Another note in this store is that it has both ",Object(a.b)("inlineCode",{parentName:"p"},"todoIds")," and ",Object(a.b)("inlineCode",{parentName:"p"},"todoMap"),".\nThey are denormalized. The reason for this pattern is\nit would allow state usage tracking easier.\nIn other words, we might not need ",Object(a.b)("inlineCode",{parentName:"p"},"React.memo")," in a certain case.\nIf you want the data in the store to be normalized,\nplease check out the array pattern in ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/tutorial-01"}),"the other Tutorial"),"."),Object(a.b)("h2",{id:"srctodolistjs"},"src/TodoList.js"),Object(a.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(a.b)(s.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\nimport { useDispatch, useTrackedState } from './store';\nimport TodoItem from './TodoItem';\nimport NewTodo from './NewTodo';\n\nconst TodoList = () => {\n  const dispatch = useDispatch();\n  const state = useTrackedState();\n  const setQuery = event => {\n    dispatch({ type: 'QUERY_CHANGED', query: event.target.value });\n  };\n  return (\n    <div>\n      {state.error && <h1>{state.error.message}</h1>}\n      <ul>\n        {state.todoIds.map(id => (\n          <TodoItem key={id} id={id} />\n        ))}\n        <NewTodo />\n      </ul>\n      <div>\n        Highlight Query for incomplete items:\n        <input value={state.query} onChange={setQuery} />\n      </div>\n      {state.pending && <h3>Processing...</h3>}\n    </div>\n  );\n};\n\nexport default TodoList;\n\n"))),Object(a.b)(s.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\n\nimport { useDispatch, useTrackedState } from './store';\nimport TodoItem from './TodoItem';\nimport NewTodo from './NewTodo';\n\nconst TodoList: React.FC = () => {\n  const dispatch = useDispatch();\n  const state = useTrackedState();\n  const setQuery = (event: React.ChangeEvent<HTMLInputElement>) => {\n    dispatch({ type: 'QUERY_CHANGED', query: event.target.value });\n  };\n  return (\n    <div>\n      {state.error && <h1>{state.error.message}</h1>}\n      <ul>\n        {state.todoIds.map(id => (\n          <TodoItem key={id} id={id} />\n        ))}\n        <NewTodo />\n      </ul>\n      <div>\n        Highlight Query for incomplete items:\n        <input value={state.query} onChange={setQuery} />\n      </div>\n      {state.pending && <h3>Processing...</h3>}\n    </div>\n  );\n};\n\nexport default TodoList;\n\n")))),Object(a.b)("p",null,"This component is to show the list of ",Object(a.b)("inlineCode",{parentName:"p"},"TodoItem"),"s,\n",Object(a.b)("inlineCode",{parentName:"p"},"NewTodo")," to create a new item, and\na text field for highlight query.\nIt will also show error and pending states."),Object(a.b)("p",null,"Notice it only passes ",Object(a.b)("inlineCode",{parentName:"p"},"id")," to ",Object(a.b)("inlineCode",{parentName:"p"},"TodoItem"),"."),Object(a.b)("h2",{id:"srctodoitemjs"},"src/TodoItem.js"),Object(a.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(a.b)(s.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\nimport { useDispatch, useTrackedState } from './store';\n\nconst renderHighlight = (title, query) => {\n  if (!query) return title;\n  const index = title.indexOf(query);\n  if (index === -1) return title;\n  return (\n    <>\n      {title.slice(0, index)}\n      <b>{query}</b>\n      {title.slice(index + query.length)}\n    </>\n  );\n};\n\nconst TodoItem = ({ id }) => {\n  const dispatch = useDispatch();\n  const state = useTrackedState();\n  const todo = state.todoMap[id];\n  const delTodo = () => {\n    dispatch({ type: 'DELETE_TODO', id: todo.id });\n  };\n  return (\n    <li>\n      <input\n        type=\"checkbox\"\n        checked={!!todo.completed}\n        onChange={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}\n      />\n      <span\n        style={{\n          textDecoration: todo.completed ? 'line-through' : 'none',\n        }}\n      >\n        {todo.completed ? todo.title : renderHighlight(todo.title, state.query)}\n      </span>\n      <button onClick={delTodo}>Delete</button>\n    </li>\n  );\n};\n\nexport default React.memo(TodoItem);\n\n"))),Object(a.b)(s.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\n\nimport { useDispatch, useTrackedState } from './store';\n\nconst renderHighlight = (title: string, query: string) => {\n  if (!query) return title;\n  const index = title.indexOf(query);\n  if (index === -1) return title;\n  return (\n    <>\n      {title.slice(0, index)}\n      <b>{query}</b>\n      {title.slice(index + query.length)}\n    </>\n  );\n};\n\ntype Props = {\n  id: string;\n};\n\nconst TodoItem: React.FC<Props> = ({ id }) => {\n  const dispatch = useDispatch();\n  const state = useTrackedState();\n  const todo = state.todoMap[id];\n  const delTodo = () => {\n    dispatch({ type: 'DELETE_TODO', id: todo.id });\n  };\n  return (\n    <li>\n      <input\n        type=\"checkbox\"\n        checked={!!todo.completed}\n        onChange={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}\n      />\n      <span\n        style={{\n          textDecoration: todo.completed ? 'line-through' : 'none',\n        }}\n      >\n        {todo.completed ? todo.title : renderHighlight(todo.title, state.query)}\n      </span>\n      <button onClick={delTodo}>Delete</button>\n    </li>\n  );\n};\n\nexport default React.memo(TodoItem);\n\n")))),Object(a.b)("p",null,"This is the TodoItem component.\nIt dispathes async actions,\nbut it doesn't need to know if an action is sync or async."),Object(a.b)("h2",{id:"srcnewtodojs"},"src/NewTodo.js"),Object(a.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(a.b)(s.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\nimport { useState } from 'react';\n\nimport { useDispatch } from './store';\n\nconst NewTodo = () => {\n  const dispatch = useDispatch();\n  const [text, setText] = useState('');\n  const addTodo = () => {\n    dispatch({ type: 'CREATE_TODO', title: text });\n    setText('');\n  };\n  return (\n    <li>\n      <input\n        value={text}\n        placeholder=\"Enter title...\"\n        onChange={e => setText(e.target.value)}\n      />\n      <button onClick={addTodo}>Add</button>\n    </li>\n  );\n};\n\nexport default React.memo(NewTodo);\n\n"))),Object(a.b)(s.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\nimport { useState } from 'react';\n\nimport { useDispatch } from './store';\n\nconst NewTodo: React.FC = () => {\n  const dispatch = useDispatch();\n  const [text, setText] = useState('');\n  const addTodo = () => {\n    dispatch({ type: 'CREATE_TODO', title: text });\n    setText('');\n  };\n  return (\n    <li>\n      <input\n        value={text}\n        placeholder=\"Enter title...\"\n        onChange={e => setText(e.target.value)}\n      />\n      <button onClick={addTodo}>Add</button>\n    </li>\n  );\n};\n\nexport default React.memo(NewTodo);\n\n")))),Object(a.b)("p",null,"This is the NewTodo component to create a new item.\nIt uses a local state for the text field."),Object(a.b)("h2",{id:"codesandbox"},"CodeSandbox"),Object(a.b)("p",null,"You can try ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://codesandbox.io/s/great-euler-22bxz"}),"working example"),"."))}l.isMDXComponent=!0},123:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)&&o.length){var s=a.apply(null,o);s&&e.push(s)}else if("object"===r)for(var i in o)n.call(o,i)&&o[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(t,[]))||(e.exports=o)}()},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var o=n(0),a=n.n(o),r=a.a.createContext({}),s=function(e){var t=a.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=s(e.components);return a.a.createElement(r.Provider,{value:t},e.children)};var c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),p=s(n),l=o,u=p[i+"."+l]||p[l]||d[l]||r;return n?a.a.createElement(u,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(u,Object.assign({},{ref:t},c))}));function l(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},128:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(123),s=n.n(r),i=n(87),c=n.n(i);const d={left:37,right:39};t.a=function(e){const{block:t,children:n,defaultValue:r,values:i}=e,[p,l]=Object(o.useState)(r),u=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},i.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===e,className:s()("tab-item",c.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>u.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case d.right:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case d.left:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(u,e.target,e),onFocus:()=>l(e),onClick:()=>l(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter(e=>e.props.value===p)[0]))}},129:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);