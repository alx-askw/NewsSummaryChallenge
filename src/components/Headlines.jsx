import PropTypes from 'prop-types'

const Headlines = ({ newsData }) => {
    console.log(newsData);

    const NEWSMAP = newsData.map((items) => {
        return {
            id: items.id,
            webTitle: items.webTitle,
        }
    })
    return (
        <div>
            <h3></h3>
        </div>
    )
}

Headlines.propTypes = {
    newsData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            webTitle: PropTypes.string.isRequired,

        })
    ).isRequired
}

export default Headlines    
