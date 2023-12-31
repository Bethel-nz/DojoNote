import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			
				<Link to="/">
					<h1 className="logo">Dojo<strong>Note</strong></h1>
				</Link>
			
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/create">Create</Link>
			</div>
		</nav>
	);
};

export default Navbar;
