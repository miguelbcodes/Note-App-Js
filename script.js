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
            <div class="card-body">
              <h5 class="card-title">Note ${index + 1}</h5>
              <p class="card-text"> ${element}</p>
              <button id=${index} onclick="deleteNote(this.id)" class="btn btn-danger">Delete Note</button>
              <button id=${index} onclick="editNote(${index})" class="btn btn-secondary">Edit Note</button>
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
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes)
  };
  let newText = prompt('Enter the new note:', notesObj[index])
  notesObj[index] = newText
  localStorage.setItem('notes', JSON.stringify(notesObj));
  showNotes();
};