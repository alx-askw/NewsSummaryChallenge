import PropTypes from 'prop-types'
import errImg from '../assets/404cat.jpg'; // just in case a thumbnail is missing :)

const Headlines = ({ newsData }) => {
    return (
        <div className='"container'>
            <div className='col'>
                <img className='img-fluid rounded mx-auto d-block' src={newsData.fields.thumbnail || errImg}></img>
            </div>
            <div>
                <p className='text-center fs-2 col-md-4 mx-auto'>
                    {newsData.webTitle || <div>Missing Headline!</div>}
                </p>
            </div>
        </div>
    )
}

Headlines.propTypes = {
    newsData: PropTypes.shape({
        id: PropTypes.string.isRequired,
        fields: PropTypes.shape({
            thumbnail: PropTypes.string
        }),
        webTitle: PropTypes.string,

    })
}

export default Headlines    
