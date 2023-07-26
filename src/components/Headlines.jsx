import PropTypes from 'prop-types'
import errImg from '../assets/404cat.jpg'; // just in case a thumbnail is missing :)

const Headlines = ({ newsData }) => {
    return (
        <div className='container'>
            <img className='img-fluid rounded mx-auto d-block' src={newsData.fields.thumbnail || errImg}></img>
            <p className='text-center fs-2'>
                {newsData.webTitle || <div>Missing Headline!</div>}
            </p>
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
