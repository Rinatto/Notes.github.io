const Create_Note = document.querySelector('.create_Note');
const Card = document.querySelector('.card');
const Main = document.querySelector('.main');
const DeleteNote = document.querySelector('.delete_Note');

Create_Note.addEventListener('click', function () {
    const div = document.createElement('div');
    Main.append(div);
    div.innerHTML = ` 
    <div class="card">
    <textarea name="" id="" cols="30" rows="2"></textarea>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <button>Edit note</button>
    <button>Delete note</button>
</div>
    `
  });

    DeleteNote.addEventListener('click', function (e) {
    Card.remove();
  });
