# Delete function
remeber you passed it as a prop to the bloglist component

```javascript
	const handleDelete = (id) => {
		const newNotes = blogs.filter(blog => blog.id !== id);
		setNotes(newNotes)};
```

# style

## Delete Button
written in **JSX**
```javascript
<button onClick={() => handleDelete(blog.id)} className="delete">
	Delete Note
</button>
```
