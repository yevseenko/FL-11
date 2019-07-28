const rootNode = document.getElementById('root');

const todoItems = [{
	isDone: false,
	id: 12345,
	description: 'Todo 1'
}];





function windowHashChange() {
	switch (location.hash) {
		case '#1':
			console.log('location #1');
			break;
		case '#2':
			console.log('location #2');
			break;
		default:
			break;
	}
}

window.addEventListener('hashchange', windowHashChange, false);

// rootNode.appendChild(/* Append your list item node*/);
