import React, { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './pages/Header';
import Project from './pages/Project';
import projects from '../projectList';
import Resume from './pages/Resume'
import Navigation from './Navigation';
import Footer from './Footer';

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
            return (
                <div className="container">
                    <div className="row h-100">
                        <div className="col d-flex flex-column flex-md-row justify-content-around">
                            <Project projects={projects} />
                        </div>
                    </div>
                </div>
            );
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