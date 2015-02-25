## HabraKarmaView

Подсказка кармы и&nbsp;рейтинга по&nbsp;наведению на&nbsp;любой ник на&nbsp;странице, кроссбраузерно.<br>

Работает для группы 3 сайтов с родственными движками:  http://habrahabr.ru, http://geektimes.ru, http://megamozg.ru (у каждого из сайтов - свой счётчик рейтинга), и в кеше Гугла для этих 3 сайтов: [для habr](http://webcache.googleusercontent.com/search?q=cache:http://habrahabr.ru) , [для geektimes](http://webcache.googleusercontent.com/search?q=cache:http://geektimes.ru) и т.д. .
<br>
<i>Интегрирован с HabrAjax - работает в его подгруженных статьях (с помощью Custom Event).</i>

Данные с сервера для одной и той же ссылки читаются с сервера не чаще раза в минуту. Показ активируется на разных типах ссылок на пользователей: в заголовке статьи или комментария в ссылке, начинающейся с "@". Показатели округлены до 0.1. Цветами подложки отражаются 4 интервала значений кармы: менее -5, от -5 до 0, от 0 до 14.9, от 15 до 29.9, более 30. (Если сервер не отвечает, об ошибке чтения не сообщается.)

<ul>
	<li>Место хостинга с описанием: <a href=https://greasyfork.org/ru/scripts/1965-habrakarmaview>Greasyfork</a></li>
	<li>Старое описание <a href=http://userscripts-mirror.org/scripts/show/132273.html>userscripts -mirror.org</a> <i>(не&nbsp;устанавли-<br>вать оттуда)</i></li>
</ul>

![screenshot](https://github.com/spmbt/haPages/raw/gh-pages/doc/img/habraKarmaView20141231-052826.png)
