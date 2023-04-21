import React, { useState, useEffect } from "react"

// context 객체 생성
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {},
})

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        const storedUserLocalStorage = localStorage.getItem("isLoggedIn")

        if (storedUserLocalStorage === "1") {
            setIsLoggedIn(true)
        }
    }, [])
    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn")
        setIsLoggedIn(false)
    }

    const loginHandler = () => {
        localStorage.setItem("isLoggedIn", "1")
        setIsLoggedIn(true)
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
