function addItem() {
     const todo__list = document.querySelector('ul#todo__list');
     const todo_input = document.getElementById('todo_input');

     if (todo_input.value.length > 0) {
          const item = document.createElement('li');

          item.classList.add('todo_item');

          item.innerHTML = `
               <div class="radio"><img src="" alt=""></div>
               <div class="text">
                    ${todo_input.value}
               </div>
               <div class="remove"><img src="./images/icon-cross.svg" alt=""></div>
          `;

          todo__list.append(item);

          todo_input.value = '';

          updateItems(1);
     } else {
          alert("Please enter text and click round button");
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


