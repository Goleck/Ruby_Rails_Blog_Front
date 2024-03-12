import React, { useState } from 'react';
import axios from 'axios';

function CreateArticle() {
  const [article, setArticle] = useState({ title: '', body: '', status: '', author: '', category: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/articles', article);
      console.log('Article created:', response.data);
      console.log('console log article' , article);
      console.log('console log response' , response);
    } catch (error) {
      console.error('Error creating article:', error);
      setErrorMessage('Error creating article. Please try again later.');
    }
  };

  const handleChange = (e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>Create New Article</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={article.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea
            name="body"
            value={article.body}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Status:</label>
          <input
            type="text"
            name="status"
            value={article.status}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={article.author.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={article.category.name}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Article</button>
      </form>
    </div>
  );
}

export default CreateArticle;
