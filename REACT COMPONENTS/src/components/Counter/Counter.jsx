import './Counter.css'
import { useState } from 'react'
// import { FaPlus,FaMinus } from "react-icons/fa"
import { Title } from './components/Title'
import { Button } from './components/Button'


export const Counter = () => {

    const [count, setCount] = useState(0)

    const onIncrement = ()=>{
      count<10 ? setCount(prev => prev+1):'';
    }
    const onDecrement = ()=>{
      count>0 ? setCount(prev => prev-1):'';
    }
    
  return (
    <div className='container'>
        <div className='counter-container'>
            <Title />
            <h1>Count {count} </h1>
            <Button onIncrement = {onIncrement} onDecrement = {onDecrement} />
        </div>

    </div>
  )
}

