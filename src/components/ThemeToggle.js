import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <button className='btn btn-primary' onClick={toggleTheme}>Toggle the theme</button>
        </div>
    )
}

export default ThemeToggle
