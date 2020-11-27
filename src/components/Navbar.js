import React, { Component } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext'

class Navbar extends Component {
    render() {
        return (
            <AuthContext.Consumer>{authContext => (
                <ThemeContext.Consumer>{themeContext => {
                    const { isAuthenticated, toggleAuth } = authContext;
                    const { isLightTheme, light, dark } = themeContext;
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
                }}
                </ThemeContext.Consumer>
            )}
            </AuthContext.Consumer>
        )
    }
}

export default Navbar
