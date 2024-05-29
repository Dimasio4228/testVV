let tg = window.Telegram.WebApp;


tg.ready();
tg.expand();
window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                // пользователь прокрутил страницу до конца, показываем кнопку
                tg.MainButton.show()
        }
};


tg.MainButton.text = "Записаться"; //изменяем текст кнопки

tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры

Telegram.WebApp.onEvent('mainButtonClicked', function(){

        tg.sendData(JSON.stringify("Вы записались на прием!!!"));
    //при клике на основную кнопку отправляем данные в строковом виде
});