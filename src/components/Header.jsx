import { useNavigate } from 'react-router'
import './Header.css'

const Header = () => {

    const navigate = useNavigate();


    return (
        <div>
            <h1 className='headerMain' onClick={() => navigate("/")}> &#x269C; DF Gazette</h1 >
        </div >
    )
}

export default Header
