(function () {
	const rootNode = document.querySelector('#root');
	location.hash = '';

	let todoItems = [];

	const ENTER_KEY_CODE = 13;
	const current = {
		text: ''
	}

	const header = document.createElement('h1');
	header.innerHTML = `Simple TODO List`;
	const list = document.createElement('ul');
	const addBtn = document.createElement('button');
	addBtn.innerHTML = 'Add todo';
	const saveBtn = document.createElement('button');
	saveBtn.innerHTML = `Save changes`;
	const cancelBtn = document.createElement('button');
	cancelBtn.innerHTML = `Cancel`;
	const input = document.createElement('input');
	input.required = true;
	const wrapper = document.createElement('div');

	function listTemplate() {
		if (todoItems.length) {
			list.innerHTML = `${todoItems.map(item => `
		<li id="${item.id}">
			${item.isDone ? `
				<img src="./assets/img/done-s.png" name="done"/>
				<span class="done">${item.description}</span>
				` : `
				<img src="./assets/img/todo-s.png" name="isDone"/>
				<span>${item.description}</span>
				`}
			<img src="./assets/img/remove-s.jpg" name="remove"/>
		</li>`).join('')}
		`;
		} else {
			list.innerHTML = `Nothing to view`;
		}
	}

	function addBtnHandler() {
		location.hash = '#add';
	}

	function saveBtnHandler() {
		if (location.hash === '#add') {
			if (todoItems.find(item => item.description === input.value)) {
				showAlert('Item already added');
			} else {
				addTodo(input.value);
				location.hash = '';
				input.value = '';
			}
		}
		if (location.hash === '#edit') {
			const temp = todoItems.filter(item => item.description !== current.text);
			if (temp.find(item => item.description === input.value)) {
				showAlert('Already exits');
			} else {
				editTodo(input.id, input.value);
				location.hash = '';
				input.value = '';
			}
		}
	}

	function cancelBtnHandler() {
		location.hash = '';
		input.value = '';
	}

	function inputHandler(e) {
		if (e.keyCode === ENTER_KEY_CODE) {
			if (e.target.value) {
				saveBtnHandler();
			}
		}
	}

	function addTodo(desc) {
		const id = '_' + Date.now();
		const isDone = false;
		todoItems.push({
			isDone: isDone,
			id: id,
			description: desc
		});
		todoItems = todoItems.sort((a, b) => a.isDone - b.isDone);
		location.hash = '';
	}

	function removeTodo(id) {
		todoItems = todoItems.filter(item => item.id !== id);
		mainView();
	}

	function editTodo(id, desc) {
		const indexOfItem = todoItems.indexOf(todoItems.find(item => item.id === id));
		todoItems[indexOfItem].description = desc;
		mainView();
	}

	function isDoneTodo(id) {
		const indexOfItem = todoItems.indexOf(todoItems.find(item => item.id === id));
		todoItems[indexOfItem].isDone = true;
		todoItems = todoItems.sort((a, b) => a.isDone - b.isDone);
		mainView();
	}

	function showAlert(msg) {
		const alert = document.createElement('div');
		alert.style.background = '#f00';
		alert.style.position = 'absolute';
		alert.style.padding = '10px'
		alert.innerHTML = msg;
		alert.id = 'alert';
		alert.style.top = '10px';
		rootNode.appendChild(alert);
		removeAlert();
	}

	function removeAlert() {
		const TIMEOUT = 5000;
		setTimeout(() => {
			if (document.getElementById('alert')) {
				rootNode.removeChild(document.getElementById('alert'));
			}
		}, TIMEOUT);
	}

	function listHandler(e) {
		switch (e.target.name) {
			case 'remove':
				removeTodo(e.target.parentNode.id);
				break;
			case 'isDone':
				isDoneTodo(e.target.parentNode.id);
				break;
			case 'done':
				showAlert(`Can't edit this`);
				break;
			default:
				input.id = e.target.parentNode.id;
				if (todoItems.find(item => item.id === input.id).isDone) {
					showAlert(`Can't edit this`);
					break;
				} else {
					location.hash = '#edit';
					current.text = todoItems.find(item => item.id === input.id).description;
					input.value = current.text;
				}
				break;
		}
	}

	function editView() {
		rootNode.innerHTML = ``;
		header.innerHTML = `Edit item`;
		listTemplate();
		rootNode.appendChild(header);
		rootNode.appendChild(input);
		rootNode.appendChild(wrapper);
		wrapper.appendChild(cancelBtn);
		wrapper.appendChild(saveBtn);
	}

	function mainView() {
		rootNode.innerHTML = ``;
		header.innerHTML = `Simple TODO List`;
		listTemplate();
		rootNode.appendChild(header);
		rootNode.appendChild(addBtn);
		rootNode.appendChild(list);
	}

	function addView() {
		rootNode.innerHTML = ``;
		header.innerHTML = `Add Todo item`;
		listTemplate();
		rootNode.appendChild(header);
		rootNode.appendChild(input);
		rootNode.appendChild(wrapper);
		wrapper.appendChild(cancelBtn);
		wrapper.appendChild(saveBtn);
	}

	function windowHashChange() {
		switch (location.hash) {
			case '#add':
				addView();
				break;
			case '#edit':
				editView();
				break;
			default:
				mainView();
				break;
		}
	}

	window.addEventListener('load', windowHashChange, false);
	window.addEventListener('hashchange', windowHashChange, false);
	addBtn.addEventListener('click', addBtnHandler, false);
	saveBtn.addEventListener('click', saveBtnHandler, false);
	cancelBtn.addEventListener('click', cancelBtnHandler, false);
	input.addEventListener('keyup', inputHandler, false);
	list.addEventListener('click', listHandler, false);
}());
