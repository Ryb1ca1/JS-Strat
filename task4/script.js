document.addEventListener('DOMContentLoaded', function() {
    let changeLink = document.querySelector('#changeLink');
  
    // Добавляем обработчик события на клик по ссылке
    changeLink.addEventListener('click', function(event) {
      // Предотвращаем стандартное поведение ссылки
      event.preventDefault();
  
      // Используем prompt для получения текста от пользователя
      let newText = prompt('Введите новый текст для ссылки:', '');
  
      // Проверяем, был ли введен текст и не была ли нажата кнопка "Отмена"
      if (newText !== null) {
        // Изменяем текст ссылки на введенный текст
        changeLink.textContent = newText;
      }
    });
  });
  