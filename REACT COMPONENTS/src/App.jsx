import { useState } from 'react'
import './App.css'
import { Counter } from './components/Counter/Counter'
import { UserList } from './components/UserList/UserList'
import { Toggle } from './components/Toggle/Toggle'
import { Accordion } from './components/Accordion/Accordion'



function App() {
  
  const [viewComponent,setViewComponent] =  useState('')

  const HandleViewComponent = (component) =>{
   setViewComponent(component)
   console.log(component);
  }
  

  return (
    <>
      <div>
        <div className='navbar'>
          <div className='nav-item' onClick={()=> HandleViewComponent('Counter')}>
            Counter
          </div>
          <div className='nav-item' onClick={()=> HandleViewComponent('UserList')}>
            UserList
          </div>
          <div className='nav-item' onClick={()=> HandleViewComponent('Toggle')}>
            Toggle
          </div>
          <div className='nav-item' onClick={()=> HandleViewComponent('Accordion')}>
            Accordion
          </div>
          <div className='nav-item' onClick={()=> HandleViewComponent('Form1')}>
            FormOne
          </div>
        </div>
      </div>
      {
        viewComponent === 'Counter' && (
          <div>
            <Counter />
          </div>
        )
      }
      {
        viewComponent === 'UserList' && (
          <div>
            <UserList />
          </div>
        )
      }
      {
        viewComponent === 'Toggle' && (
          <div>
            <Toggle />
          </div>
        )
      }
      {
        viewComponent === 'Accordion' && (
          <div>
            <Accordion />
          </div>
        )
      }
    </>
  )
}

export default App
