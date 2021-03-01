import { createContext, useState } from "react"

export const MenuContext = createContext({
  display: "",
  setDisplay: () => { }
})

export const MenuProvider = ({ children }) => {
  const [display, setDisplay] = useState("")

  return (
    <MenuContext.Provider value={{
      display,
      setDisplay
    }}>
      {children}
    </MenuContext.Provider>
  )
}