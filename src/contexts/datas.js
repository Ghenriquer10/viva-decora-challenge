import {useState, createContext} from 'react'

export const DataContext = createContext({})

function DataProvider({children}){
    const[menuMobile, setMenuMobile] = useState(false)
    return(
        <DataContext.Provider value={{menuMobile, setMenuMobile}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;