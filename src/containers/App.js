import React, { Component } from 'react';
import './App.css';
import NavBar from '../components/NavBar/NavBar'
import Title from '../components/Title/Title'
import Intro from '../components/Intro/Intro'
import Education from '../components/Education/Education'
import Work from '../components/Work/Work'
import Skills from '../components/Skills/Skills'
import Portfolio from '../components/Portfolio/Portfolio'
import Footer from '../components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Title />
        <section id="about" name="about"></section>
        <Intro />
        <section id="work" name="work"></section>
        <Work />
        <Education />
        <seciton id="skills" name="skills"></seciton>
        <Skills />
        <section id="side-projects" name="side-projects"></section>
        <Portfolio />
        <section id="contact" name="contact"></section>
        <Footer />
      </div>
    );
  }
}

export default App;
