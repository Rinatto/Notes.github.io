const Create_Note = document.querySelector('.create_Note');
const Card = document.querySelector('.card');
const Main = document.querySelector('.main');
const Delete_Note_first = document.querySelector('.delete_Note_first');


Create_Note.addEventListener('click', function () {
    const div = document.createElement('div');
    Main.append(div);
    div.innerHTML = ` 
    <div class="card">
    <label for="name">Название заметки:</label>
    <textarea name="name" cols="30" rows="2" placeholder="Введите номер заметки"></textarea>
    <label for="text">Текст:</label>
    <textarea name="text" cols="30" rows="10" placeholder="Введите текст"></textarea>
    <!--<button>Редактировать заметку</button>-->
    <button class = "delete_Note button button-delete">Удалить заметку</button>
    </div>
    `
    const DeleteNote = div.querySelector('.delete_Note');

    DeleteNote.addEventListener('click', function (e) {
     div.remove();
    });



return div;


  });


  Delete_Note_first.addEventListener('click', function (e) {
     Card.remove();
  });

  
/*
  areaName.value = localStorage.getItem('areaName');
  areaName.oninput = () => {
  localStorage.setItem('areaName', areaName.value)
  };
*/

/*
  areaText.value = localStorage.getItem('areaText');
  areaText.oninput = () => {
  localStorage.setItem('areaText', areaText.value)
  };
*/