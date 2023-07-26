import PropTypes from 'prop-types'

import errImg from '../assets/404cat.jpg'; // just in case a thumbnail is missing :)

const Headlines = ({ newsData }) => {
    return (
        <div>
            <img src={newsData.fields.thumbnail || errImg}></img>
            <h3>
                {newsData.webTitle || <div>no stories</div>}
            </h3>
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
