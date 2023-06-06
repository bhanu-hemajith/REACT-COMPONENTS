import { FaPlus,FaMinus } from "react-icons/fa"

export const Button = ({onIncrement,onDecrement}) => {
  
  return (
    <>
        <button onClick={onIncrement}><FaPlus /></button>
        <button onClick={onDecrement}><FaMinus /></button>
    </>
    
  )
}
