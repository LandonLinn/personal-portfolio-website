import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Pages
import ProjectPage from './pages/project-page/ProjectPage';
import ArticlePage from './pages/article-page/ArticlePage';
import Homepage from './pages/homepage/Homepage';
import Error from './pages/404-page/Error';
import MobileMenu from './components/mobile-menu/MobileMenu';


const App = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(prev => !prev);

  return (
    <>
        {/* Header */}
        <Header handleOpen={handleOpen} />       

        <MobileMenu isOpen={open} handleOpen={handleOpen} />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/articles" element={<ArticlePage />} />
          {/* 404 */}
          <Route path='*' element={<Error />}/>
        </Routes>

        {/* Footer */}
        <Footer />
    </>
  )
}

export default App
