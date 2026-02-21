import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
import ProjectDetails from './pages/project-details/ProjectDetails';


const App = () => {

  // Handle Side menu opening
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(prev => !prev);

  // Navigation
  const location = useLocation();
  const navigate = useNavigate();

  const navigateTo = (id) => {
  if (location.pathname !== "/") {
    navigate("/", { state: { scrollTo: id } });
    return;
  }

  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};

  return (
    <>
        {/* Header */}
        <Header handleOpen={handleOpen} navigate={navigateTo}/>       

        <MobileMenu isOpen={open} handleOpen={handleOpen} />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Homepage  />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/api/projects/:slug" element={<ProjectDetails />} />
          {/* <Route path="/articles" element={<ArticlePage />} /> */}
          {/* 404 */}
          <Route path='*' element={<Error />}/>
        </Routes>

        {/* Footer */}
        <Footer navigate={navigateTo}/>
    </>
  )
}

export default App
