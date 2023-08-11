import { useHistory } from "react-router-dom";
import Notelist from "./NoteList";
import useFetch from "./useFetch";
import { Fragment } from "react";

const Home = () => {
	const history = useHistory();
	const { data: notes, isLoading, error } = useFetch(
		"http://localhost:9000/notes"
	);
	const handleHistory = () => {
		history.push("/create");
	};
	return (
		<div className="home">
			{error &&
				<div className="error">
					{error}
				</div>}
			<div className="new-note">
				<button onClick={handleHistory} className={"add"}>
					Add a New Note
				</button>
			</div>
			{notes &&
				<Fragment>
					{isLoading && <div className="loading">Loading ...</div>}
					{notes && <Notelist notes={notes} />}
				</Fragment>}
		</div>
	);
};
export default Home;
