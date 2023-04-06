import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [isSidebar, setIsSidebar] = useState(false);
    const [isModal, setIsModal] = useState(false);

    const openSidebar = () => {
        setIsSidebar(true)
    }

    const closeSidebar = () => {
        setIsSidebar(false)
    }

    const openModal = () => {
        setIsModal(true)
    }

    const closeModal = () => {
        setIsModal(false)
    }

    return <AppContext.Provider
        value={{isModal, isSidebar, openModal, closeModal, openSidebar, closeSidebar}}
    >
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};
