import { Link } from "react-router-dom";

function NavBar() {
  return <> 
  <nav className="bg-gray-950 md:p-4  py-4  text-white px-8 flex justify-between items-center shadow-md ">
    <div className="text-3xl md:text-lg font-bold">
       <Link to="/">MoO Movies</Link>
    </div>
    <div className="flex gap-8 md:gap-4 ">
        <Link to="/" className="text-base py-2 px-4 rounded transition-colors duration-200 hover:bg-white/40 ">Main</Link>
        <Link to="/favorites " className="text-base px-4 py-2 rounded transition duration-200 hover:bg-white/40 ">Favorites</Link>
    </div>
  </nav>
  </>;
}
export default NavBar;  