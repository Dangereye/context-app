import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const Footer = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <footer style={{ background: theme.background, color: theme.color }}>
            <div className="container">
                <p className="copyright">&copy; Dangereye 2020</p>
            </div>
        </footer>
    )
}

export default Footer
