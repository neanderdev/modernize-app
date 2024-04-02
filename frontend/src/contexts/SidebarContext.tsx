'use client';

import { ReactNode, createContext, useContext, useState } from 'react';

interface SidebarProviderProps {
    children: ReactNode;
}

interface SidebarContextData {
    openSidebar: boolean;
    handleToggleSidebar: () => void;
}

export const SidebarContext = createContext({} as SidebarContextData);

export function SidebarDrawerProvider({ children }: SidebarProviderProps) {
    const [openSidebar, setOpenSidebar] = useState(false);

    function handleToggleSidebar() {
        setOpenSidebar(!openSidebar);
    }

    return (
        <SidebarContext.Provider
            value={{
                openSidebar,
                handleToggleSidebar,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
}

export const useSidebar = () => useContext(SidebarContext);
