import React, { useState } from "react"
import Footer from "./components/UI/Footer"
import AddUser from "./components/Users/AddUser"
import UserList from "./components/Users/UsersList"

function App() {
    const [usersList, setUsersList] = useState([])

    const addUserHandler = (uNmae, uAge) => {
        setUsersList((prevUsersList) => {
            return [...prevUsersList, { name: uNmae, age: uAge , id: Math.random().toString()}]
        })
    }

    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UserList users={usersList} />
            <Footer/>
        </div>
    )
}

export default App
