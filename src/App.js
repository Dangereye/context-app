import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <BookList />
      </main>

      <Footer />
    </div>
  );
}

export default App;
