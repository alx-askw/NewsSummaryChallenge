import PropTypes from 'prop-types'

const Headlines = ({ newsData }) => {
    console.log(newsData)
    return (
        <div>

            <h3>
                {newsData.length > 0 ? newsData : <div>no stories</div>}
            </h3>
        </div>
    )
}

// Headlines.propTypes = 
//     newsData: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             webTitle: PropTypes.string.isRequired,

//         })
//     ).isRequired
// }

export default Headlines    
