function submitForm() {
    // Получаем элементы формы
    let form = document.querySelector('#myForm');
    let textInput = document.querySelector('#textInput');
    let duplicateField = document.querySelector('#duplicateField');
  
    // Получаем значение из поля ввода
    let inputValue = textInput.value;
  
    // Выводим значение в консоль
    console.log('Введенный текст:', inputValue);
  
    // Выводим значение в текстовый блок
    duplicateField.textContent = inputValue;
  
    // Очищаем поле ввода
    textInput.value = '';
  }
  