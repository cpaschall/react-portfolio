import React, { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './pages/Header';
import Project from './pages/Project';
import projects from '../projectList';
import Resume from './pages/Resume'
import Navigation from './Navigation';
import Footer from './Footer'

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Header');

    const renderPage = () => {
        if (currentPage === 'Header') {
            return <Header />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Project') {
            return <Project projects={projects}/>;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume currentPage='Resume'/>;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    )
}