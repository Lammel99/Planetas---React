import React from 'react'








export const EmailUser = React.createContext(); 

const ContextEmail = (props) => {
  return (
    <EmailUser.Provider value={props.value}>{props.children}</EmailUser.Provider>
  )
}

export default ContextEmail