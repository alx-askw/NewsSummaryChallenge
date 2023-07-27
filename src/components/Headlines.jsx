import PropTypes from 'prop-types'
import errImg from '../assets/404cat.jpg'; // just in case a thumbnail is missing :) | I think it doesnt work as intended
import { useNavigate } from 'react-router';
import { articleIDFormatter as addTrim } from '../utils/articleIDFormatter';

const Headlines = ({ newsData }) => {
    let articles = [];
    newsData.forEach(element => {
        articles.push(element)
    });

    const navigator = useNavigate();

    return (
        <div className='"container'>
            <div className='col'>
                {articles.map(newsObj => (
                    <div key={newsObj.id}>
                        <img className='img-fluid rounded mx-auto d-block' onClick={() => navigator(`/article/${addTrim(newsObj.id)}`)} src={newsObj.fields.thumbnail || errImg} />,
                        <p className='text-center fs-2 col-md-4 mx-auto'>
                            {newsObj.webTitle || <div>Missing Headline!</div>}
                        </p>
                    </div>
                ))}

            </div>
        </div>
    )
}

// Headlines.propTypes = {
//     newsData: PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         fields: PropTypes.shape({
//             thumbnail: PropTypes.string
//         }),
//         webTitle: PropTypes.string,

//     })
// }

export default Headlines    
