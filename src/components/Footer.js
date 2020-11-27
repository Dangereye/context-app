import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export class Footer extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <footer style={{ background: theme.background, color: theme.color }}>
                <div className="container">
                    <p className="copyright">&copy; Dangereye 2020</p>
                </div>
            </footer>
        )
    }
}

export default Footer
