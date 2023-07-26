import PropTypes from 'prop-types'

const errorImg = '../assets/404cat.jpg';

const Headlines = ({ newsData }) => {
    return (
        <div>
            <img src={newsData !== undefined ? newsData.fields.thumbnail : errorImg}></img>
            <h3>
                {newsData !== undefined ? newsData.webTitle : <div>no stories</div>}
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
