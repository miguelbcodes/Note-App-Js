showNotes();

// Save note to localStorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function(){
  let addText = document.getElementById('addText');
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addText.value);
  localStorage.setItem('notes', JSON.stringify(notesObj));
  addText.value = '';
  showNotes();
});

// Notes displayed will have a serial number
function showNotes() {
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  };
  let html = '';
  notesObj.forEach(function(element, index) {
    html += `
          <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div id="card-${index}" class="card-body">
              <h5 class="card-title">Note ${index + 1}</h5> 
              <p class="card-text"> ${element}</p>
              <button id=${index} onclick="deleteNote(this.id)" class="btn btn-danger">Delete Note</button>

              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#edit-window" data-bs-index="${index + 1}" data-bs-content="${element}">Edit</button>
              
            </div>
          </div>`
  });
  let notesElm = document.getElementById('notes');
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Create your first note!`
  }
};

// Deleting the note
function deleteNote(index) {
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes)
  };
  notesObj.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notesObj));
  showNotes();
};

// Editing the note
function editNote(index) {
  let content = document.getElementById('message-text').value;
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes)
  };
  notesObj[index] = content;
  localStorage.setItem('notes', JSON.stringify(notesObj));
  showNotes();
};

// Display the edit window
let editWindow = document.getElementById('edit-window')
editWindow.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  let button = event.relatedTarget
  // Extract info from data-bs-* attributes
  let content = button.getAttribute('data-bs-content')
  let title = `Editing: Note ${button.getAttribute('data-bs-index')}`;
  let id = Number(button.getAttribute('data-bs-index')) - 1;
  // Update the modal's content.
  let modalBodyTextArea = editWindow.querySelector('.modal-body textarea');
  let modalHeaderTitle = editWindow.querySelector('.modal-header h5');
  let modalFooterEditButton = editWindow.querySelector('.modal-footer #edit-btn');

  modalBodyTextArea.value = content;
  modalHeaderTitle.textContent = title;
  modalFooterEditButton.setAttribute('onclick', `editNote(${id})`);
});