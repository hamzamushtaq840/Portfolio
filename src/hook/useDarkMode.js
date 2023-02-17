import { useEffect, useState } from 'react'

export default function useDarkMode() {
    const [theme, setTheme] = useState("dark")
    const colorTheme = theme === "dark" ? "light" : "dark"
    useEffect(() => {
        if (colorTheme === 'light') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

    }, [theme, colorTheme])

    return [colorTheme, setTheme]
}