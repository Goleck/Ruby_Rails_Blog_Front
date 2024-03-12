import ArticleComponent from '../components/ArticleComponent';
import CreateArticle from '../components/CreateArticleComponent';


const ArticlePage = () => {
    return (
        <div>
            <div><h1>Article</h1></div>
            <ArticleComponent />
            <CreateArticle />
        </div>
    );
};

export default ArticlePage;