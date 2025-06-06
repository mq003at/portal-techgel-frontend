// ui/DrawerContext.tsx
import { createContext, useContext, useState } from 'react';

const DrawerContext = createContext<{
    isDrawerOpen: boolean;
    toggleDrawer: () => void;
}>({
    isDrawerOpen: true,
    toggleDrawer: () => { },
});

export const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer }}>
            {children}
        </DrawerContext.Provider>
    );
};

export const useDrawer = () => useContext(DrawerContext);
