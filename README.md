### haPages - это юзерскрипты, юзерстили для сайтов и их описания, поддерживаемые автором _spmbt_

> Замечание для пользователей ***Firefox 30*** и ***Scriptish***: нужно использовать [последнюю ночную сборку от 11 мая или около того, 0.1.12 и новее](https://github.com/scriptish/scriptish-nightlies/tags) Scriptish для корректных результатов (иначе, проблемы - с функциями GM_*** - и не работает список настроек для Fx30, а за ним многое другое).

[HabrAjax (описание)](http://spmbt.github.io/haPages/doc/habrAjax/) - сборный юзерскрипт для сайта [habr.ru](http://habrahabr.ru) с поддержкой 3 основных браузеров, имеющий более 60 функций для улучшения подачи информации на страницах сайта. Работает совместно со стилями [ZenComment](https://userstyles.org/styles/36690/), но способен работать отдельно. ([Старый адрес](http://userscripts-mirror.org/scripts/show/121690) (не устанавливать оттуда!), архив версий и описание, [новый адрес](https://greasyfork.org/scripts/1970-habrajax).)

* [===== Установить (прямая ссылка) последнюю версию 134 от 2014-10-23 здесь =====](http://spmbt.github.io/haPages/userscript/habrAjax/habrajax.user.js)

Версия (номер 132+) учитывает последние изменения вёрстки на сайте от 17 октября 2014, добавляет сайт [geektimes.ru](http://geektimes.ru) и содержит новую версию 4.12+ [стилей ZenComment](http://userstyles.org/styles/36690/), [(или здесь)](https://raw.githubusercontent.com/spmbt/haPages/gh-pages/userscript/habrAjax/zenComment.user.css), преобразующих внешний вид сайта, как описано в [ZenComment и преодоление «бешеной плитки» на χ·е](http://habrahabr.ru/post/223555/). Предпочтительнее устанавливать стили ZenComment отдельно (нет "рывка" от перестилизации в 1-ю секунду), с использованием аддона [Stylish для Firefox](https://addons.mozilla.org/ru/firefox/addon/stylish/) или [для Chrome](https://chrome.google.com/webstore/detail/stylish/fjnbnpbmkenffdnngjfgmeleoegfcffe?hl=ru) или без него для Старой Оперы.

HabrAjax для Chrome или Старой [Оперы устанавливается](http://f-lite.ru/lfp/s015.radikal.ru/i332/1010/ed/7bd2820ccbf6.png/htm) без вспомогательных программ. Для Firefox предпочтительно использовать [Scriptish](https://addons.mozilla.org/ru/firefox/addon/scriptish/versions/?page=1#version-0.1.12), но возможно и [Greasemonkey](https://addons.mozilla.org/ru/firefox/addon/greasemonkey/versions/).

Для загрузки скрипта в Хром как распакованного расширения полезно иметь [файл манифеста](https://raw.githubusercontent.com/spmbt/haPages/gh-pages/userscript/habrAjax/manifest.json). Для других скриптов - пишутся аналогичные или другим способом достигается [разрешение скриптов в Хроме](http://habrahabr.ru/post/226063/).

> С 30 мая 2014 года новые версии HabrAjax и других скриптов, относящихся к Хабру, стали размещаться на [github.com/spmbt/haPages](https://github.com/spmbt/haPages/tree/gh-pages) из-за невозможности обновления версий на прежнем традиционнном хостинге.

#### Другие скрипты в формате "*название: ссылка на установку. Описание*"
(*обратите внимание*, что ссылки на установку со страниц описания на userscripts.org - УСТАРЕВШИЕ и не могут быть там обновлены. **Устанавливать - только с Github**)

* [HabrPercentageRing](http://userscripts-mirror.org/scripts/show/129371): [===== установить, от 2014-10-17 =====](https://raw.githubusercontent.com/spmbt/haPages/gh-pages/userscript/habrpercentagering/habrpercentagering.user.js). Показ соотношения положительных и отрицательных оценок к комментарию или статье кольцевой диаграммой вокруг суммарной оценки.

* [UfoCorrect](http://userscripts-mirror.org/scripts/show/397762): [===== установить,  от 2014-06-01 =====](https://raw.githubusercontent.com/spmbt/haPages/gh-pages/userscript/ufocorrect/ufocorrect.user.js). Удаление дизайнерского эффекта "длинных теней" на логотипах сайтов (заменой нескольких картинок).

* [HabrActivity](http://userscripts-mirror.org/scripts/show/162360): [===== установить, от 2014-10-17 =====](https://raw.githubusercontent.com/spmbt/haPages/gh-pages/userscript/habractivity/habractivity.user.js). Просмотр активности пользователей в комментариях в виде диаграммы наподобие Contributions в Github. (Скриншот)[http://img89.imageshack.us/img89/4424/habractivity03.png].

* [HabraKarmaView](http://userscripts-mirror.org/scripts/show/132273.html): [===== установить, от 2014-10-18 =====](https://raw.githubusercontent.com/spmbt/haPages/gh-pages/userscript/habrakarmaview/habrakarmaview.user.js). Подсказка кармы по наведению на любой ник на странице, кроссбраузерно, для habr и geektimes.

* юзерстили [UfoCorrect](http://userstyles.org/styles/98513/ufocorrect) (нормально ставятся и оттуда одним кликом) [===== прямая ссылка на код user.css 2014-06-01 =====](https://raw.githubusercontent.com/spmbt/haPages/gh-pages/userscript/ufocorrect/ufocorrect.user.css). Делает то же, что скрипт ufoCorrect.

* юзерскрипты [FeedlyCtrlF5](https://greasyfork.org/ru/scripts/5915-feedly-partial-refresh-by-r-in-any-keyboard-layout); [===== прямая ссылка на код user.js  2014-10-22 =====](spmbt.github.io/haPages/userscript/feedlyCtrlF5/feedlyctrlf5.user.js) - обновляет фиды по клавише "R" в любой национальной раскладке, дополняет стили, как в [стилях feedly-com-more-compact](https://userstyles.org/styles/102580/feedly-com-more-compact), выводит автора и название читаемой статьи в плавающем блоке вверху.

* **Новое:**: юзерстили [HabraDarkAge](http://spmbt.github.io/haPages/doc/habrAjax/habraDarkAge.htm); [===== установить =====](http://spmbt.github.io/haPages/userscript/habrAjax/habraDarkAge.user.css) ([описание на хостинге стилей](https://userstyles.org/styles/101697/))- тёмная тема Хабра, повторяющая в основном его дизайн, но в других цветах.


<br>

---

Пример страницы `haPages` для описания функций: [Перенос сообщений из "прямого эфира" в "Лучшие"](http://spmbt.github.io/haPages/doc/habrAjax/sidebarLive2Dailybest.htm).



