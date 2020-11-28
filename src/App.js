import React from 'react';
import ThemeContextProvider from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Footer from './components/Footer';
import AuthContextProvider from './contexts/AuthContext';


const App = () => {
  return (
    <div className="app">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <Footer />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
