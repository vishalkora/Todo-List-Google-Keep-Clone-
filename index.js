function update() {
  console.log("hello")
  itemJSONArray = [];
  title = document.getElementById('title').value;
  desc = document.getElementById('description').value;
  if (localStorage.getItem('itemJSON') == null) {
    title !== '' && desc !== '' && itemJSONArray.push([title, desc]);
    localStorage.setItem('itemJSON', JSON.stringify(itemJSONArray));
  }
  else {
    itemJSONArrayStr = localStorage.getItem('itemJSON');
    itemJSONArray = JSON.parse(itemJSONArrayStr);
    title !== '' && desc !== '' && itemJSONArray.push([title, desc]);
    localStorage.setItem('itemJSON', JSON.stringify(itemJSONArray));
  }

  //populate table body
  let tableBody = document.getElementById('tableBody');
  let str = "";
  itemJSONArray.forEach((element, index) => {
    str += `<tr>
          <th scope="row">${index + 1}</th>
          <td>${element[0]}</td>
          <td>${element[1]}</td>
          <td><button class="btn btn-sm btn-danger" onClick="deleted(${index})">Delete</button> </td>
        </tr>`;
  });
  tableBody.innerHTML = str;
}
add = document.getElementById('add');
add.addEventListener("click", update)
update();
function deleted(item) {
  console.log("Delete", item)
  itemJSONArrayStr = localStorage.getItem('itemJSON');
  itemJSONArray = JSON.parse(itemJSONArrayStr);
  itemJSONArray.splice(item, 1)
  localStorage.setItem('itemJSON', JSON.stringify(itemJSONArray));
  update();

}
function clearStorage() {
  if (confirm("Do You Really Want To Delete")) {
    localStorage.clear();
    update();
  }
}

function mode(type) {
  let lightMode = document.getElementById("light")
  let darkMode = document.getElementById("dark")
  let navbar = document.getElementById("nav");
  let body = document.getElementById("body");
  let notes = document.getElementById("notes");
  let notesOther = document.getElementById("notesOther");
  let btnNotes = document.getElementById("btnNotes");
  let titleInput = document.getElementById("titleLabel");
  let descInput = document.getElementById("description");

  if (type === "light") {
    darkMode.classList.remove("d-none");
    lightMode.classList.add("d-none");
    navbar.classList.add("navNotes");
    navbar.classList.remove("navNotesDark");
    body.classList.add("body");
    body.classList.remove("bodyDark");
    notes.classList.add("notes");
    notes.classList.remove("notesDark");
    notesOther.classList.add("notesOther");
    notesOther.classList.remove("notesOtherDark");
    btnNotes.classList.add("btnNotes");
    btnNotes.classList.remove("btnNotesDark");
    titleInput.classList.add("inputKeep");
    titleInput.classList.remove("inputKeepDark");
    descInput.classList.add("inputKeep");
    descInput.classList.remove("inputKeepDark");
  }
  else {
    lightMode.classList.remove("d-none");
    darkMode.classList.add("d-none");
    navbar.classList.remove("navNotes");
    navbar.classList.add("navNotesDark");
    body.classList.remove("body");
    body.classList.add("bodyDark");
    notes.classList.remove("notes");
    notes.classList.add("notesDark");
    notesOther.classList.remove("notesOther");
    notesOther.classList.add("notesOtherDark");
    btnNotes.classList.remove("btnNotes");
    btnNotes.classList.add("btnNotesDark");
    titleInput.classList.remove("inputKeep");
    titleInput.classList.add("inputKeepDark");
    descInput.classList.remove("inputKeep");
    descInput.classList.add("inputKeepDark");
  }
}