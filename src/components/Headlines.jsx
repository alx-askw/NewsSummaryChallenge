import PropTypes from 'prop-types'

const Headlines = ({ newsData }) => {
    console.log(newsData);


    return (
        <div>
            <h3>{newsData[0]}</h3>
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
