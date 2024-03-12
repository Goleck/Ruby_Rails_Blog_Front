import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditArticleComponent() {
    const [article, setArticle] = useState({});
    const [updatedArticle, setUpdatedArticle] = useState({});
    const { id } = useParams(); 

    useEffect(() => {
        async function fetchArticle() {
            try {
                const response = await axios.get(`http://localhost:3000/articles/${id}`);
                setArticle(response.data);
                setUpdatedArticle(response.data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        }

        fetchArticle();
    }, [id]); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedArticle(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:3000/articles/${id}`, updatedArticle);
            // Redirection vers la page de détails de l'article ou une autre page
        } catch (error) {
            console.error('Error updating article:', error);
        }
    };

    return (
        <div>
            <h2>Edit Article</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" value={updatedArticle.title || ''} onChange={handleChange} />
                </div>
                <div>
                    <label>Body:</label>
                    <textarea name="body" value={updatedArticle.body || ''} onChange={handleChange} />
                </div>
                <div>
          <label>status:</label>
          <textarea
            name="status"
            value={updatedArticle.status || ''}
            onChange={handleChange}
            required
          ></textarea>
        </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

export default EditArticleComponent;
