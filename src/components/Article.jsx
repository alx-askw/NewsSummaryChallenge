import { useParams } from "react-router-dom"
import errImg from '../assets/404cat.jpg';
import { articleIDFormatter as addTrim } from '../utils/articleIDFormatter';
import './Article.css';

const Article = ({ newsData }) => {
    const { id } = useParams();

    let newsPage = [];
    newsData.forEach(element => {
        newsPage.push(element)
    });

    const newsToshow = newsPage.find(e => addTrim(e.id) === id)

    if (!newsToshow) {
        return (
            <>
                <div>
                    <img src={errImg} alt="404 not working" />
                </div>
            </>
        )
    }

    return (
        <>
            <div>
                <img className='img-fluid rounded mx-auto d-block w-100 h-75' src={newsToshow.fields.thumbnail || errImg} />
                <br />
                <h1 className="ArticleMain">
                    {newsToshow.webTitle}
                </h1>
                <br />
                <p className="ArticleParagraph">
                    {newsToshow.fields.bodyText}
                </p>

            </div>
        </>
    )
}

export default Article

