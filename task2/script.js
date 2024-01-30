{
const consoleLogElement = document.querySelector('#consoleLog');

consoleLogElement.addEventListener('click',() => {
    alert('Служит для вывода информации в консоль.')
});
};

const alertElement = document.querySelector('#alert');

alertElement.addEventListener('click', () => {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK.');
});


{
const promptElement = document.querySelector('#prompt');

promptElement.addEventListener('click',() => {
    alert('Отображает диалоговое окно с запросом на ввод текста.')
});
};