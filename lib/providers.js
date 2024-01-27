'use client'

import { ThemeProvider } from "next-themes"
import { useState, useEffect } from "react"

const Providers = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        setDarkMode(true);
    }, []);

    if(!darkMode){
        return <>{children}</>
    }

    return <ThemeProvider attribute="class">{children}</ThemeProvider>

}

export default Providers;