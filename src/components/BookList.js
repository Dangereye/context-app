import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <section className='book-list' style={{ background: theme.body, color: theme.color }}>
            <div className="container">
                <ul>
                    <li style={{ background: theme.background }}>The way of kings</li>
                    <li style={{ background: theme.background }}>The Name of the wind</li>
                    <li style={{ background: theme.background }}>The final empire</li>
                </ul>
                <ThemeToggle />
            </div>
        </section>
    )
}

export default BookList
