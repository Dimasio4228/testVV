let tg = window.Telegram.WebApp;

let user;
let queryId;
tg.ready();
tg.expand();
tg.MainButton.show()

try {
    user=tg.initDataUnsafe.user.username;
    queryId=tg.initDataUnsafe.user.first_name;
}

catch (e) {window.alert("Failed to load Telegram User");}


tg.MainButton.text = "Записаться"; //изменяем текст кнопки

tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры

Telegram.WebApp.onEvent('mainButtonClicked', function(){

        tg.sendData(JSON.stringify("Вы записались на прием!!!"));
    //при клике на основную кнопку отправляем данные в строковом виде
});