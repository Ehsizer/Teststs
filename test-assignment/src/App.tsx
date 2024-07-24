import React from 'react';
import './App.css';
import Slider from './components/Slider';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Тестовое задание</h1>
      </header>
      <main>
        <Slider />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;