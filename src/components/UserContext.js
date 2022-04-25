import React, { useState, useContext } from 'react';

const UsernameContext = React.createContext()
const UpdateUsernameContext = React.createContext()

export const useUsername = () => {
  return useContext(UsernameContext)
}

export const useUpdateUsername = () => {
  return useContext(UpdateUsernameContext)
}

export const UserProvider = ({value, children}) => {
  const [username, setUsername] = useState(value)
  return (
    <UsernameContext.Provider value={username}>
      <UpdateUsernameContext.Provider value={setUsername}>
        {children}
      </UpdateUsernameContext.Provider>
    </UsernameContext.Provider>
  )
}