// Поле вывода ответа
var resultArea = document.getElementById("resultArea");
// Переменная для хранения загруженных данных
var result;
// Вспомогательный текст
var labelText = {
  'car': "У машины ",
  'pc': "У компьютера ",
  'phone': "У телефона "
};
  
// Получаем данные из JSON
$.getJSON("static/js/data.json")
.done(function(data) {
  result = data;
});

// Функция для выпадающего меню
function selectOption() {
  // Получаем выбранное значение
  let selOption = document.getElementById("database").value;
  // Очищаем поле вывода
  resultArea.innerHTML = "";
  // Проходим по всем обьектам из Data файла
  Object.keys(result).forEach(el =>{
    // Проверяем есть ли у каждого обьекта выбранный ключ?
    if(_.has(result[el], selOption)) {
      // Выводим результат
      resultArea.innerHTML += labelText[el] + String(result[el][selOption]) + "</br>";
    }
  })
}