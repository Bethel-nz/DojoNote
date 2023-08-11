import {Link} from 'react-router-dom';

const Notelist = ({notes}) => {
	return (
		<div className='note-list'>
			{notes.map((note) => (
				<div
					key={note.id}
					className='note-preview'
				>
					<h2>{note.title}</h2>
					<p>{note.body.substring(100, 0)}</p>
					<div className='btn-container'>
						<Link to={`/notes/${note.id}`}>
							<button className='read'>Read</button>
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default Notelist;
