import PropTypes from 'prop-types'

const Headlines = ({ newsData }) => {
    newsData.forEach(element => {
        console.log(element.type)
    });

    return (
        <div>
            <h3>
                { }
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
