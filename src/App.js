import React, { useCallback } from 'react'

// HelloWorld.jsx
// memo is a hook that returns a memoized version of the component
const HelloWorld = React.memo(({ increment }) => {
  console.log('hello')

  return (
    <div>
      <h3>HelloWorld component</h3>
      <button onClick={increment}>Hello World</button>
    </div>
  )
})

function App() {
  const [count, setCount] = React.useState(0)

  // useCallback is a hook that returns a memoized version of the callback
  const increment = useCallback(() => {
    console.log('increment function')
    setCount((c) => c + 1)
  }, [])

  return (
    <div>
      <HelloWorld increment={increment} />
      <h3>Count : {count}</h3>
    </div>
  )
}

export default App
