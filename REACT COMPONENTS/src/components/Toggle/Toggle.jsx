import './Toggle.css'
import { useState, useEffect} from "react"
import { Title } from "./title component/Title"





export const Toggle = () => {
    
    const [luminationState, setLuminationState] = useState(false)

    const toggleState = ()=>{
        setLuminationState(luminationState => !luminationState)
    }

    useEffect(() => {
      
        const intervalId = setInterval(() => {
            console.log("rendering");
        }, 1000);
      return () => {
        clearInterval(intervalId)
      }
    }, [])
    
  return (
    <div className="main-container">
        {
            luminationState ? 
            <>
                <Title />
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg" alt="" /> 
            </>
              : 
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg" alt="" />
        }
        <button className='onOffBtn' onClick={toggleState}>
            {
                !luminationState ? 'On':'Off'
            }
        </button>
        
    </div>
  )
}

