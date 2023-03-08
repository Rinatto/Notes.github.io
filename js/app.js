const Create_Note = document.querySelector('.create_Note');
const Card = document.querySelector('.card');
const Main = document.querySelector('.main');
const Delete_Note_first = document.querySelector('.delete_Note_first');
const Save_Note_first = document.querySelector('.save_Note_first');

Create_Note.addEventListener('click', function () {
    const div = document.createElement('div');
    Main.append(div);
    div.innerHTML = ` 
      <div class="card">
         <label for="areaNameCurrent">Название заметки:</label>
         <textarea name="name" id="areaNameCurrent" cols="30" rows="2" placeholder="Введите номер заметки"></textarea>
         <label for="areaTextCurrent">Текст:</label>
         <textarea name="text" id="areaTextCurrent" cols="30" rows="10" placeholder="Введите текст"></textarea>
         <button class="save_Note button button-down">Сохранить/Показать заметку</button>
         <button class = "delete_Note button button-down">Удалить заметку</button>
      </div>
    `
    const DeleteNote = div.querySelector('.delete_Note');
    const Save_Note = div.querySelector('.save_Note');

    DeleteNote.addEventListener('click', function (e) {
     div.remove();
    });
    
    Save_Note.addEventListener('click', function (e) {

      areaNameCurrent.value = localStorage.getItem('areaNameCurrent');
      areaNameCurrent.oninput = () => {
      localStorage.setItem('areaNameCurrent', areaNameCurrent.value)
      };
      
      areaTextCurrent.value = localStorage.getItem('areaTextCurrent');
      areaTextCurrent.oninput = () => {
      localStorage.setItem('areaTextCurrent', areaTextCurrent.value)
      };
      
   });   
return div;

  });


  Delete_Note_first.addEventListener('click', function (e) {
     Card.remove();
  });

  Save_Note_first.addEventListener('click', function (e) {
    areaName.value = localStorage.getItem('areaName');
    areaName.oninput = () => {
    localStorage.setItem('areaName', areaName.value)
    };

    areaText.value = localStorage.getItem('areaText');
    areaText.oninput = () => {
    localStorage.setItem('areaText', areaText.value)
    };
 });
