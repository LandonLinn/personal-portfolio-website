import './App.css';
import { Routes, Route } from 'react-router-dom';

// Components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Pages
import ProjectPage from './pages/project-page/ProjectPage';
import ArticlePage from './pages/article-page/ArticlePage';
import Homepage from './pages/homepage/Homepage';

const App = () => {
  return (
    <>
        {/* Header */}
        <Header/>       

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/articles" element={<ArticlePage />} />
          {/* 404 */}
          <Route path='*' element={null}/>
        </Routes>

        {/* Footer */}
        {/* <Footer /> */}
    </>
  )
}

export default App
