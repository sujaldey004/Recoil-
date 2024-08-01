import { useContext, useState } from 'react'
import { CountContext } from './context';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, evenSelector } from './store/atom/count';

function App() {

  return (
    <RecoilRoot>
      <Count></Count>
      <Isiteven></Isiteven>
    </RecoilRoot>
  )
}

function Isiteven(){
  const count = useRecoilValue(countAtom);
  const isEven = useRecoilValue(evenSelector)
  return <div>
    {isEven ? null : "It is Even"}
  </div>
}

function Count({ setCount }) {
  return <div>
    <CounterRenderer></CounterRenderer>
    <Buttons></Buttons>
  </div>
}

function CounterRenderer() {
  const count = useRecoilValue(countAtom)
  return <b>
    {count}
  </b>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => setCount(count => count + 1)}>Increase</button>
    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App
