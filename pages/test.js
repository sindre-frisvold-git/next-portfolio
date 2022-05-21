import { useState } from 'react'

export default function test() {
  const [testNo, setTestNo] = useState(0)

  function clickHandler(e) {
    e.preventDefault()
    setTestNo(testNo + 1)
  }

  return (
    <>
      <h1>This is a test</h1>
      <p>Number: {testNo}</p>
      <button onClick={clickHandler}>Add 1</button>
    </>
  )
}
