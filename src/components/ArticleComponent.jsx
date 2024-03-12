import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function ArticleComponent() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await axios.get('http://localhost:3000/articles');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    }

    fetchArticles();
  }, []);

  const handleArticleClick = (article) => {
  };

  const handleDeleteArticle = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/articles/${id}`);
      setArticles(articles.filter(article => article.id !== id));
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  return (

        <div>
      <h1>Liste des articles</h1>
      
        {articles.map(article => (
          <div className='container_article' key={article.id} onClick={() => handleArticleClick(article)}>
            <h2 className='title'>{article.title} | {article.author.author} | {article.category.name}</h2> 
            <p>{article.body}</p>
            <div className='button_article'>
            <button className='button_change' onClick={() => handleDeleteArticle(article.id)}>Supprimer</button>
            <Link  to={`/edit/${article.id}`}><button className='button_change'>Modifier</button></Link>
            </div>
          </div>
        ))}

      
    </div>
  );
}

export default ArticleComponent;
