function addItem() {
     const todo__list = document.querySelector('ul#todo__list');
     const todo_input = document.getElementById('todo_input');

     if (todo_input.value.length > 0) {
          const item = document.createElement('li');

          item.classList.add('todo_item');

          item.innerHTML = `
               <div class="radio" onclick="completed(this)"></div>
               <div class="text">
                    <span>${todo_input.value}</span>
               </div>
               <div class="remove" onclick="removeParentItem(this);"><img src="./images/icon-cross.svg" alt=""></div>
          `;

          todo__list.append(item);

          todo_input.value = '';

          updateItems(1);
     } else {
          alert("Please enter text and click round button");
     }
}

function nightTheme() {
     if (document.querySelector('body').classList.contains('night_theme')) {
          document.querySelector('body').classList.remove('night_theme');
          document.querySelector('body').classList.add('light_theme');
          document.querySelector('#themeID').src = "./images/icon-moon.svg";
          document.querySelector('.bg_img img').src = "./images/bg-desktop-light.jpg";
     } else {
          document.querySelector('body').classList.add('night_theme');
          document.querySelector('body').classList.remove('light_theme');
          document.querySelector('#themeID').src = "./images/icon-sun.svg";
          document.querySelector('.bg_img img').src = "./images/bg-desktop-dark.jpg";
     }
}





const todoList = document.querySelector('#todo__list');


function updateItems(num) {
     const itemsCount = document.querySelector('.item_left p');
     itemsCount.innerText = +itemsCount.innerText + num;
}


function removeParentItem(e) {
     e.parentElement.remove();
     updateItems(-1);
}

function completed(e) {
     if (e.classList.contains('completed')) {
          e.style.background = '';
          e.innerHTML = '';
          e.classList.remove('completed');
     } else {
          e.classList.add('completed');
          e.innerHTML = `<img src="./images/icon-check.svg" alt="check">`;
          e.style.background = 'linear-gradient(120deg, rgba(87, 221, 255, 1) 35%, rgba(192, 88, 243, 1) 100%)';
          const text = document.querySelector('.text span').closest('.radio');
     }
}

function clearCompleted() {
     const elements = document.getElementsByClassName('completed');
     for (let i = 0; i < elements.length; i++) {
          elements[i].parentElement.remove('todo_item');
     }
     updateItems(-1);
}





