import { useParams } from "react-router-dom"
import errImg from '../assets/404cat.jpg';

const Article = ({ newsData }) => {
    const { id } = useParams();


    // if (!article) {
    //     return (
    //         <>
    //             <img src={errImg} alt="404 article not found" />
    //         </>
    //     )
    // }
    return (
        <>
            <div>
                here  {id}
            </div>
        </>
    )
}

export default Article
