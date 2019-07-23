(function () {
  const rootNode = document.querySelector('#root');
  const inputField = document.querySelector('#inputField');
  const addBtn = document.querySelector('#addBtn');
  let nodesList;
  let dragSrcEl = null;
  const todos = {
    _first: {
      text: 'Find the cat',
      isComplete: false
    },
    _second: {
      text: 'Love cat',
      isComplete: false
    },
    _third: {
      text: 'Breathe a cat',
      isComplete: false
    }
  };

  function addItem(text) {
    const id = generateId();
    todos[id] = {
      text: text,
      isComplete: false,
      edit: false
    };
    inputField.value = '';
    renderList();
  }

  function removeItem(id) {
    delete todos[id];
    renderList();
  }

  function toggleItem(id) {
    todos[id].isComplete = true;
    console.log(todos[id]);
  }

  function editItem(id) {
    todos[id].edit = true;
    renderList();
  }

  function saveItem(id, text) {
    todos[id].text = text;
    todos[id].edit = false;
    renderList();
  }

  const listeners = {
    added: false
  }

  function renderList() {
    const temp = Object.keys(todos);
    console.log(temp);
    const MAX_LENGTH = 10;
    if (temp.length >= MAX_LENGTH && listeners.added) {
      inputField.removeEventListener('keypress', handleKeyPress);
      inputField.removeEventListener('input', handleInput);
      addBtn.removeEventListener('click', handleClick);
      listeners.added = false;
      console.log('Listeners removed')
    }

    if (!listeners.added) {
      inputField.addEventListener('keypress', handleKeyPress, false);
      inputField.addEventListener('input', handleInput, false);
      addBtn.addEventListener('click', handleClick, false);
      listeners.added = true;
      console.log('listeners added');
    }

    const data = temp.map(item => {
      let itemField;
      if (todos[item].edit) {
        itemField = `<input type="text" id="edit" value="${todos[item].text}">
        <i class="material-icons md-24" name="save">save</i>`;
      } else {
        itemField = `<span>${todos[item].text}</span>
        <i class="material-icons md-24" name="edit">edit</i>`
      }
      return `<li id="${item}" draggable="true">
        <div>
          <i class="material-icons md-24" name="toggle">check_box_outline_blank</i>
          ${itemField}
        </div>
        <div>
          <i class="material-icons md-24 right" name="delete">delete</i>
        </div>
        </li>`;
    }).join('');

    rootNode.innerHTML = `<ul>${data}</ul>`;
    nodesList = document.querySelectorAll('li');
    nodesList.forEach(function (item) {
      item.addEventListener('dragstart', handleDragStart, false);
      item.addEventListener('dragenter', handleDragEnter, false);
      item.addEventListener('dragover', handleDragOver, false);
      item.addEventListener('dragleave', handleDragLeave, false);
      item.addEventListener('drop', handleDrop, false);
      item.addEventListener('dragend', handleDragEnd, false);
    });
  }

  function generateId() {
    return '_' + Date.now();
  }

  function handleDragStart(e) {
    dragSrcEl = this;
    e.target.style.oppacity = '0.4';
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'move';

    return false;
  }

  function handleDragEnter(e) {
    e.target.classList.add('over');
  }

  function handleDragLeave(e) {
    e.target.classList.remove('over');
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
  }

  function handleDragEnd() {
    nodesList.forEach(function (item) {
      item.classList.remove('over');
    });
  }

  function handleKeyPress(e) {
    const ENTER_KEY_CODE = 13;
    if (e.keyCode === ENTER_KEY_CODE) {
      if (inputField.value) {
        addBtn.className += ' md-inactive'
        addItem(inputField.value);
      }
    }
  }

  function handleInput(e) {
    if (e.target.value) {
      addBtn.classList.remove('md-inactive');
    } else {
      addBtn.className += ' md-inactive';
    }
  }

  function handleClick(e) {
    if (inputField.value) {
      e.target.className += ' md-inactive';
      addItem(inputField.value);
    }
  }

  function handleRootClick(e) {
    const target = e.target.parentNode.parentNode;
    const action = e.target.getAttribute('name');
    const targetId = target.getAttribute('id');
    const input = document.querySelector('#edit');
    switch (action) {
      case 'edit':
        editItem(targetId);
        break;
      case 'delete':
        removeItem(targetId);
        break;
      case 'save':
        saveItem(targetId, input.value);
        break;
      case 'toggle':
        if (!todos[targetId].isComplete) {
          toggleItem(targetId);
          e.target.innerText = 'check_box';
          e.target.className += ' md-inactive';
          break;
        } else {
          break;
        }
        default:
          break;
    }
  }

  function handleInputKeyPress(e) {
    const input = document.querySelector('#edit');
    const ENTER_KEY_CODE = 13;
    if (e.keyCode === ENTER_KEY_CODE) {
      if (input.value) {
        const ID = e.target.parentNode.parentNode.getAttribute('id');
        saveItem(ID, e.target.value);
      }
    }
  }

  rootNode.addEventListener('click', handleRootClick, false);
  rootNode.addEventListener('keypress', handleInputKeyPress, false);

  renderList();
}());
