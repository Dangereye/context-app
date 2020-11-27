import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export class ThemeToggle extends Component {
    static contextType = ThemeContext
    render() {
        const { toggleTheme } = this.context;
        return (
            <div>
                <button className='btn btn-primary' onClick={toggleTheme}>Toggle the theme</button>
            </div>
        )
    }
}

export default ThemeToggle
