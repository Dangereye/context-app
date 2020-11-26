import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="container">
                    <h1>Context App</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>


            </nav>
        )
    }
}

export default Navbar
