import { useParams } from "react-router-dom"
import errImg from '../assets/404cat.jpg';
import { articleIDFormatter as addTrim } from '../utils/articleIDFormatter';
import './Article.css';
import { useEffect } from "react";

const Article = ({ newsData }) => {
    const { id } = useParams();

    let newsPage = [];
    newsData.forEach(element => {
        newsPage.push(element)
    });

    const newsToshow = newsPage.find(e => addTrim(e.id) === id)

    //still trying to get this to work - only seems to work on some articles
    useEffect(() => {
        window.scrollTo(0, 0) //https://stackoverflow.com/questions/33188994/scroll-to-the-top-of-the-page-after-render-in-react-js
    }, [])

    if (!newsToshow) {
        return (
            <>
                <div>
                    <img className='img-fluid rounded mx-auto d-block w-100 h-75' src={errImg} alt="404 not working" />
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
                    {newsToshow.webTitle || '404 - no title found'}
                </h1>
                <br />
                <p className="ArticleParagraph">
                    {newsToshow.fields.bodyText || '404 - no text found'}
                </p>

            </div>
        </>
    )
}

export default Article

