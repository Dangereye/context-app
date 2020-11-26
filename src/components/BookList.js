
import React, { Component } from 'react'

class BookList extends Component {
    render() {
        return (
            <section className='book-list'>
                <div className="container">
                    <ul>
                        <li>The way of kings</li>
                        <li>The Name of the wind</li>
                        <li>The final empire</li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default BookList
