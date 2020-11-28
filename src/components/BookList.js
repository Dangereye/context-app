import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { books } = useContext(BookContext);
    const theme = isLightTheme ? light : dark;
    return (
        <section className='book-list' style={{ background: theme.body, color: theme.color }}>
            <div className="container">
                <ul>
                    {books.map(book => {
                        return (
                            <li key={book.id} style={{ background: theme.background, color: theme.color }}>{book.title}</li>
                        )
                    })}
                </ul>
                <ThemeToggle />
            </div>
        </section>
    )
}

export default BookList
