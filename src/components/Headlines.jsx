import PropTypes from 'prop-types'

const Headlines = ({ newsData }) => {
    console.log(newsData)

    return (
        <div>
            {newsData}
            <h3>
                {listOfStories.length > 0 ? listOfStories : <div>no stories</div>}
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
