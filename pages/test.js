import { useState } from 'react'

export default function test() {
  const [testNo, setTestNo] = useState(0)

  function clickHandler(e) {
    e.preventDefault()
    setTestNo(testNo + 1)
  }

  return (
    <div className="flex flex-col flex-none hover:flex-none">
      <h1 className="text-2xl fint-bold underline">This is a test</h1>
      <p>Number: {testNo}</p>
      <button className="bg-red-200 hover:bg-red-400" onClick={clickHandler}>
        Add 1
      </button>
    </div>
  )
}
