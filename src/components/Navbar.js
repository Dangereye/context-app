import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext'



const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;
    return (
        <nav style={{ background: theme.background, color: theme.color }}>
            <div className="container">
                <h1 className='logo'>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li className='auth-btn' onClick={toggleAuth}>{isAuthenticated ? 'Sign in' : 'Sign out'}</li>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar
