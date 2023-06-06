import {useState, useEffect } from "react"
import axios from "axios"
import { AiFillDelete } from "react-icons/ai";
import './UserList.css'



export const UserList = () => {

    const [userList, setUserList] = useState([])

    useEffect(() => {
      fetchUserList()
        
      return () => {
        
      }
    }, [])

    const fetchUserList = async ()=>{
        const response = await axios('https://jsonplaceholder.typicode.com/todos')
        setUserList(response.data)
    }
    

    const handleListItem = (id)=>{
      console.log(id)
      const filteredList = userList.filter((user)=> user.id !== id )
      setUserList(filteredList)
    }

    
  return (
    <>
      <h1 className="heading">User List</h1>
      <div className="userlist-container">
      
        <ul>
          {
            userList?.map((user) => (
              <>
                <li  key={user.id}>{user.id}.{user.title} <span  >< AiFillDelete  onClick={()=> handleListItem(user.id)}  className="delete-btn" /></span> </li> 
                
              </>
              
            ))
          }
        </ul>
      </div>
    </>
    
  )
}

