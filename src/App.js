import React from "react";
// import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
// import './Project.js'
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faGithubAlt } from '@fortawesome/free-solid-svg-icons'
// import Header from './components/Header'
// import Navigation from './components/Navigation';
// import Header from './components/pages/Header';
// import About from './components/pages/About';
// import Project from './components/pages/Project';
// import projects from './projectList';
// import Contact from './components/pages/Contact';
import PortfolioContainer from './components/PortfolioContainer'


library.add(fab)

// function App() {
//   return (
//     <div>
//       <Navigation />
//       <Header />
//       <About />
//       <Project projects={projects}/>
//       <Contact />
//     </div>
    
//   )
// }

const App = () => <PortfolioContainer />;

export default App;
