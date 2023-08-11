import {useHistory, useParams} from 'react-router-dom';
import useFetch from './useFetch';

const Notedetails = () => {
	const {id} = useParams();
	const {data: note, error, isLoading} = useFetch('http://localhost:9000/notes/' + id);
	const history = useHistory();

	const handleClick = () => {
		fetch('http://localhost:9000/notes/' + note.id, {
			method: 'DELETE',
		}).then(() => {
			alert(`${note.title} has been deleted`);
			history.push('/');
		});
	};
	return (
		<div className='note-details'>
			{isLoading && <div className='loading'>Loading ...</div>}
			{error && <div>{error}</div>}
			{note && (
				<article>
					<h2>{note.title}</h2>
					<div>{note.body}</div>
					<button
						onClick={handleClick}
						className='delete'
					>
						Delete
					</button>
				</article>
			)}
		</div>
	);
};

export default Notedetails;
