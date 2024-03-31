import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="py-8">
            <button className="mr-6"><Link to='/'>Home</Link></button>
            <button><Link to='/login'>Login</Link></button>
        </div>
    );
};

export default Navbar;