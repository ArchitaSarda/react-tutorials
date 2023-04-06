import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);
    const [location, setLocation] = useState({});
    const [submenuData, setSubmneuData] = useState({page: '', links: []});

    const openSidebar = () => {
        setShowSidebar(true)
    }

    const closeSidebar = () => {
        setShowSidebar(false)
    }

    const openSubmenu = (text,coordinates) => {
        const page = sublinks.find(item => item.page === text);
        setLocation(coordinates);
        setSubmneuData(page);
        setShowSubmenu(true);
    }

    const closeSubmenu = () => {
        setShowSubmenu(false)
    }

    return <AppContext.Provider 
        value={{
            showSidebar, 
            openSidebar, 
            closeSidebar, 
            showSubmenu, 
            openSubmenu, 
            closeSubmenu,
            location,
            submenuData
        }}>
            {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, AppContext, useGlobalContext}
