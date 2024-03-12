import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
//PAGES
import PageArticle from './pages/ArticlePage';
import UpdateArticlePage from './pages/UpdatePage';
//COMPONENTS
import HEADER from '../src/components/header';
// STYLES
import '../src/style/headerStyle.css';

function App() {
  return (
    <BrowserRouter>
    <HEADER />
      <Routes>
        <Route path="/" element={<PageArticle />} />
        <Route path="/edit/:id" element={<UpdateArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
