import React, { createContext, Component } from 'react'

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { color: '#333', background: '#ddd', body: '#eee' },
        dark: { color: '#ddd', background: '#333', body: '#222' }
    }

    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme })
    }

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider
