import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [isPending, setIspending] = useState(false);
	const history = useHistory();

	const handleSubmit = e => {
		e.preventDefault();
		const note = { title, body };
		setIspending(true);
		fetch("http://localhost:9000/notes", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(note)
		}).then(() => {
			alert("New Note added");
			setIspending(false);
			//history.go(-1);
			history.push('/')
		});
		setTimeout(() => {
			setBody("");
			setTitle("");
		}, 500);
		
	};
	return (
		<div className="create">
			<h2>Create a new note</h2>
			<hr />
			<form onSubmit={handleSubmit}>
				<label>Note Title</label>
				<input
					type={"text"}
					required
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>

				<label>Note Body</label>
				<textarea
					required
					onChange={e => setBody(e.target.value)}
					value={body}
				/>
				{!isPending && <button className="add">Add Note</button>}
				{isPending && <button disabled>Adding Note ...</button>}
			</form>
		</div>
	);
};

export default Create;
