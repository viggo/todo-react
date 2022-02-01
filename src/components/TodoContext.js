import React, { createContext, useState } from 'react'

const TodoContext = createContext([{}, () => {}])

const TodoProvider = ({ children }) => {
    const [dark, setDark] = useState(false)
    
  
    return (
        <TodoContext.Provider
            value={{
                dark,
                setDark
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }
