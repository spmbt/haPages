### [HaPages](http://spmbt.github.io/haPages/) - это юзерскрипты, юзерстили для сайтов и их описания, многие из которых сделаны для  _[habrahabr.ru](http://habrahabr.ru)_ 

> Замечание для пользователей ***Firefox 30*** и ***Scriptish***: нужно использовать [последнюю ночную сборку от 11 мая или около того, 0.1.12 и новее](https://github.com/scriptish/scriptish-nightlies/tags) Scriptish для корректных результатов (иначе, проблемы - с функциями GM_*** - и не работает список настроек для Fx30, а за ним многое другое).

* [HabrAjax (подробное описание)](http://spmbt.github.io/haPages/doc/habrAjax/) - многофункциональный скрипт для улучшения функций сайта, настройками функций, с частичным использованием стилей и подключением *встроенных* в скрипт [стилей ZenComment](http://userstyles.org/styles/36690/), [(или здесь их описание)](http://spmbt.github.io/haPages/userscript/habrAjax/zenComment.user.css). Текущая версия учитывает изменения на сайте от 17 октября 2014, добавляет сайт [geektimes.ru](http://geektimes.ru).

> С 30 мая 2014 года новые версии HabrAjax и других скриптов, относящихся к Хабру, стали размещаться на [github.com/spmbt/haPages](https://github.com/spmbt/haPages/tree/gh-pages) из-за невозможности обновления версий на прежнем традиционнном хостинге.

* [Стили ZenComment](http://userstyles.org/styles/36690/) [(подробное описание)](http://spmbt.github.io/haPages/doc/habrAjax/zenComment.htm). Предпочтительнее пользоваться не встроенными в скрипт HabrAjax стилями, но совместно со скриптом (нет "рывка" от перестилизации в 1-ю секунду), с использованием аддона [Stylish для Firefox](https://addons.mozilla.org/ru/firefox/addon/stylish/) или [для Chrome](https://chrome.google.com/webstore/detail/stylish/fjnbnpbmkenffdnngjfgmeleoegfcffe?hl=ru) или без него для Старой Оперы. Статья [ZenComment и преодоление «бешеной плитки» на χ·е](http://habrahabr.ru/post/223555/)

HabrAjax для Chrome или Старой [Оперы устанавливается](http://f-lite.ru/lfp/s015.radikal.ru/i332/1010/ed/7bd2820ccbf6.png/htm) без вспомогательных программ. Хотя, в современный Хром из-за ограничения инсталляции сторонних приложений будет удобно использовать [файл манифеста](http://spmbt.github.io/haPages/userscript/habrAjax/manifest.json), приложенный рядом со скриптом, если устанавливать как распакованное расширение. Для Firefox предпочтительно использовать [Scriptish](https://addons.mozilla.org/ru/firefox/addon/scriptish/versions/?page=1#version-0.1.12), но возможно и [Greasemonkey](https://addons.mozilla.org/ru/firefox/addon/greasemonkey/versions/).

> Для загрузки скрипта в Хром как распакованного расширения полезно иметь [файл манифеста](http://spmbt.github.io/haPages/userscript/habrAjax/manifest.json). Для других скриптов - пишутся аналогичные или другим способом достигается [разрешение скриптов в Хроме](http://habrahabr.ru/post/226063/).

#### Другие скрипты и стили ####
( **Внимание**, ссылки на установку со страниц userscripts.org - УСТАРЕВШИЕ и не могут быть там обновлены. **Устанавливать - с Github или greasyfork.org.**)

* [HabrPercentageRing](https://greasyfork.org/ru/scripts/1966-habr-percentage-ring): [===== установить, от 2014-11-02 =====](http://spmbt.github.io/haPages/userscript/habrPercentageRing/habrPercentageRing.user.js) - диаграмма оценок "за" и "Против" вокруг суммарной оценки. 

* [UfoCorrect](http://userscripts-mirror.org/scripts/show/397762): [===== установить,  от 2014-06-01 =====](http://spmbt.github.io/haPages/userscript/ufocorrect/ufocorrect.user.js). Удаление дизайнерского эффекта "длинных теней" на логотипах сайтов (заменой нескольких картинок).

* [HabrActivity](https://greasyfork.org/ru/scripts/1964-habractivity): [===== установить, от 2014-10-17 =====](http://spmbt.github.io/haPages/userscript/habrActivity/habrActivity.user.js). Просмотр активности пользователей в комментариях в виде диаграммы наподобие Contributions в Github. (Скриншот)[http://img89.imageshack.us/img89/4424/habractivity03.png].
 
* [HabraKarmaView](https://greasyfork.org/ru/scripts/1965-habrakarmaview): [===== установить, от 2014-10-18 =====](http://spmbt.github.io/haPages/userscript/habraKarmaView/habraKarmaView.user.js). Подсказка кармы по наведению на любой ник на странице, кроссбраузерно, для habr и geektimes.

* юзерстили [UfoCorrect](http://userstyles.org/styles/98513/ufocorrect) (нормально ставятся и оттуда одним кликом) [===== прямая ссылка на код user.css 2014-06-01 =====](http://spmbt.github.io/haPages/userscript/ufocorrect/ufocorrect.user.css). Делает то же, что скрипт ufoCorrect.

* юзерскрипты [FeedlyCtrlF5](https://greasyfork.org/ru/scripts/5915-feedly-partial-refresh-by-r-in-any-keyboard-layout) - оформление висячих заголовков и обновление по клавише "R" в любом национальном регистре клавиатуры; 

* **Новое:**: юзерстили [HabraDarkAge](http://spmbt.github.io/haPages/doc/habraDarkAge/); [===== установить =====](http://spmbt.github.io/haPages/userscript/habraDarkAge/habraDarkAge.user.css), описание ([на хостинге стилей](https://userstyles.org/styles/101697/)), вводная статья на Хабре ["Наступают тёмные времена"](http://habrahabr.ru/post/242189/).



---

Скрипты и их функции имеют страницы описаний. Пример страницы `haPages` для описания функций: [Перенос сообщений из "прямого эфира" в "Лучшие"](http://spmbt.github.io/haPages/doc/habrAjax/sidebarLive2Dailybest.htm).



