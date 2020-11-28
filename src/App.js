import React from 'react';
import ThemeContextProvider from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Footer from './components/Footer';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';


const App = () => {
  return (
    <div className="app">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <Footer />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
