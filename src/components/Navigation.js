import { Link } from "react-router-dom"

const Navigation =()=>{ //Navigation은 Router안에 있어야한다
    return (
    <>
        <ul>
            <li>
                <Link to = "/">Home</Link>
            </li>
            <li>
                <Link to = "/profile">Profile</Link>
            </li>
            <li>
                <Link to = "/list">List</Link>
            </li>
            
        </ul>
    </>);
}
export default Navigation;