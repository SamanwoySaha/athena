import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Activities from './components/Activities/Activities';
import Project from './components/Project/Project';
import Achievement from './components/Achievement/Achievement';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Banner></Banner>
      <Activities></Activities>
      <Project></Project>
      <Achievement></Achievement>
      <Team></Team>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
