#### [HaPages](http://spmbt.github.io/haPages/) - это юзерскрипты, юзерстили для сайтов и их описания, многие из которых сделаны для  _[habrahabr.ru](http://habrahabr.ru)_ 

<table border=0 style="border-collapse: collapse" cellspacing=0>
	<tr>
		<th colspan=4>
			<h4>Скрипты и стили для разработки и использования</h4>
		</th>
	</tr>
	<tr>
		<th>Название, сайт, браузеры
		</th>
		<th>Основные функции
		</th>
		<th>Документация
		</th>
		<th>Код (смотреть; установить)
		</th>
	</tr>
	<tr>
		<td colspan=4>
<blockquote> Замечание для пользователей <b><i>Firefox 30</b></i> и <b><i>Scriptish</b></i>: нужно использовать <a href=https://github.com/scriptish/scriptish-nightlies/tags>последнюю ночную сборку от 11 мая или около того, 0.1.12 и новее</a> Scriptish для корректных результатов (иначе, проблемы - с функциями GM_*** - и не работает список настроек для Fx30, а за ним многое другое).</blockquote>
		</td>
	</tr>
	<tr>
		<td align=center valign=top><big><b><a href=http://spmbt.github.io/haPages/doc/habrAjax/>HabrAjax</a></b></big><br>
		для сайтов:<br>
		<a href=http://habrahabr.ru>Habrahabr</a>,<br>
        <a href=http://geektimes.ru>Geektimes</a>,<br>
        <a href=http://webcache.googleusercontent.com/search?q=cache:http://habrahabr.ru title="(для недавно удалённых статей)">кеш Гугла</a>,<br>
        локальный сайт<br>
        <i>(Fx3+, Chr, Op12)</i>
		</td>
		<td>Автоматизация сайта (>60 функций с настройками) с подключаемыми <a href=http://userstyles.org/styles/36690/>стилями ZenComment</a>.
			<ul>
				<li><b>Подгрузка статей</b> без перезагрузки ленты</li>
				<li><b>просмотр картинок</b> с увеличением и перемещением</li>
				<li><b>принудительный кат</b>: все аннотации - не более определённой высоты</li>
				<li><b>краткие даты</b>, адаптивно уменьшаемые заголовки</li>
				<li><b>фильтр</b> по авторам и хабам</li>
				<li><b>расцветка</b> комментаторов по активности</li>
				<li><b>примерные даты</b> публикации по номеру в URL, и т.д.</li>
			</ul>
		</td>
		<td>
			<ul>
				<li><a href=http://spmbt.github.io/haPages/doc/habrAjax/>Github-doc</a></li>
				<li><a href=https://greasyfork.org/ru/scripts/1970-habrajax>Greasyfork.org</a></li>
				<li><a href=http://userscripts-mirror.org/scripts/show/121690.html>Старое описание на userscripts.org</a> <i>(не устанавли&shy;<br>вать оттуда! - версия устаревшая и неизменяемая)</i></li>
			</ul>
		</td>
		<td>
			<i>(> 5000 строк)</i>
			<ul>
				<li><a href=https://github.com/spmbt/haPages/tree/gh-pages/userscript/habrAjax>Github</a><br>
				<li><a href=https://greasyfork.org/ru/scripts/1970-habrajax/code>Greasyfork</a><br>
				Установить:</li>
				<li><a href=http://spmbt.github.io/haPages/userscript/habrAjax/habrAjax.user.js>Raw</a></li>
				<li><a href=https://greasyfork.org/scripts/1970-habrajax/code/HabrAjax.user.js>Greasyfork</a></li>
			</ul>Рекомендуется использовать совместно со стилями <a href=http://spmbt.github.io/haPages/doc/habrAjax/zenComment.htm>ZenComment</a>. Для оценки эффекта можно включить встроенные в скрипт стили ZenComment (в настройках, которые открываются по иконке скрипта вверху справа на странице сайта).
		</td>
	</tr>
	<tr>
		<td colspan=4>
<blockquote> С 30 мая 2014 года новые версии HabrAjax и других скриптов, относящихся к Хабру, стали размещаться на <a href=https://github.com/spmbt/haPages/tree/gh-pages>github.com/spmbt/haPages</a> из-за невозможности обновления версий на прежнем традиционнном хостинге.</blockquote>
		</td>
	</tr>
	<tr>
		<td align=center valign=top>Стили<br>
			<big><b><a href=http://spmbt.github.io/haPages/doc/habrAjax/zenComment.htm>ZenComment</a></b></big><br>
			для сайтов:<br>
			<a href=http://habrahabr.ru>Habrahabr</a>,<br>
			<a href=http://geektimes.ru>Geektimes</a>,<br>
			<a href=http://webcache.googleusercontent.com/search?q=cache:http://habrahabr.ru title="(для недавно удалённых статей)">кеш Гугла</a>,<br>
			локальный сайт<br>
            <i>(Fx3+, Chr, Op12)</i>
		</td>
		<td>Переоформление сайта для <ul>
				<li>лучшей компактности статей и блоков (<i>"читать, а не скроллить"</i>),</li>
				<li>лучшей сжимаемости окна (до 320px),</li>
				<li>исправления ошибок сайта (баг малой высоты окна, нерасширение полей ввода, близкостоящие кнопки и др.).</li>
			</ul>
			Основное:
			<ul>
				<li>незаметное Geektimes-меню: показ по наведению</li>
				<li>пара кнопок меню по углам вместо левой кнопочной панели</li>
				<li>уменьшены: заголовки, межстрочный интервал, поля, зазоры, сайдбар, футер</li>
				<li>невидимые аватары, кнопки отправки ответов и деакцентирование малозначимых полей</li>
				<li>нумерация страниц (пагинатор) фиксирована внизу окна</li>
			</ul>
		</td>
		<td>
			<ul>
				<li><a href=http://spmbt.github.io/haPages/doc/habrAjax/zenComment.htm>Github-doc</a></li>
				<li><a href=http://userstyles.org/styles/36690/>Userstyles</a></li>
				<li>Статья <a href="http://habrahabr.ru/post/223555/">ZenComment и преодоление «бешеной плитки» на χ·е</a></li>
			</ul>
		</td>
		<td>
			<i>(> 1000 строк)</i>
			<ul>
				<li><a href=>Github</a><br>
				Установить:</li>
				<li><a href=>Raw</a></li>
				<li><a href=https://userstyles.org/styles/36690/>Userstyles</a></li>
			</ul>Предпочтительно включать через аддон <i>Stylish</i> (<a href="https://addons.mozilla.org/ru/firefox/addon/stylish/">для Firefox</a> или <a href="https://chrome.google.com/webstore/detail/stylish/fjnbnpbmkenffdnngjfgmeleoegfcffe?hl=ru">Chrome</a> или без него для Старой Оперы; нет "рывка" от перестилизации в 1-ю секунду), но совместно со скриптом <a href=http://spmbt.github.io/haPages/doc/habrAjax/>HabrAjax</a>.
		</td>
	</tr>


	<tr>
		<td align=center valign=top>Стили<br>
			<big><b><a href=http://spmbt.github.io/haPages/doc/habraDarkAge/>HabraDarkAge</a></b></big><br>
			для сайтов:<br>
			<a href=http://habrahabr.ru>Habrahabr</a>,<br>
			<a href=http://m.habrahabr.ru>m.Habr</a>,<br>
			<a href=http://geektimes.ru>Geektimes</a>,<br>
			<a href=http://webcache.googleusercontent.com/search?q=cache:http://habrahabr.ru title="(для недавно удалённых статей)">кеш Гугла</a>,<br>
			локальный сайт<br>
            <i>(Fx30+, Chr35+, Op12?)</i>
		</td>
		<td>Тёмная тема Хабрахабра. Дизайн, в основном, исходный, кроме тонов.
			<ul>
				<li><b>Приглушенные цвета</b> картинок и блоков сайдбара<br>
				<li>незаметное Geektimes-меню: показ по наведению</li>
				<li><b>Кнопки левой панели совмещены</b> с навигацией страниц</li>
				<li>Поддержка страниц "<b>мобильной версии</b>"</li>
				<li>Постоянно видимые подменю для широких страниц</li>
				<li>Исправление ошибок сайта</li>
				<li><b>Рост иконок вдвое</b> по наведению мыши на заголовок ответа</li>
				<li>Некоторые аналогии с ZenComment: компактный футер, деакцентирование элементов в комментариях</li>
			</ul>
		</td>
		<td>
			<ul>
				<li><a href=http://spmbt.github.io/haPages/doc/habraDarkAge/>Github</a></li>
				<li><a href=https://userstyles.org/styles/101697/>userstyles.org</a></li>
				<li>Статья <a href=http://habrahabr.ru/post/242189/>Наступают тёмные времена</a></li>
			</ul>
		</td>
		<td>
			<i>(> 1000 строк)</i>
			<ul>
				<li><a href=https://github.com/spmbt/haPages/tree/gh-pages/userscript/habraDarkAge>Github</a><br>
				Установить:</li>
				<li><a href=http://spmbt.github.io/haPages/userscript/habraDarkAge/habraDarkAge.user.css>Raw</a></li>
				<li><big><a href=https://userstyles.org/styles/101697/>Userstyles</a></big></li>
			</ul>
		</td>
	</tr>


	<tr>
		<td align=center valign=top><big><b><a href=https://greasyfork.org/ru/scripts/1966-habr-percentage-ring>HabrPercentageRing</a></b></big><br>
			для сайтов:<br>
			<a href=http://habrahabr.ru>Habrahabr</a>,<br>
			<a href=http://geektimes.ru>Geektimes</a>,<br>
			<a href=http://webcache.googleusercontent.com/search?q=cache:http://habrahabr.ru title="(для недавно удалённых статей)">кеш Гугла</a>,<br>
			локальный сайт<br>
			<i>(Fx3+, Chr, Op10+)</i>
		</td>
		<td>Показывает соотношение положительных и отрицательных оценок к комментарию или статье кольцевой диаграммой вокруг суммарной оценки.<br>
		<br>
		<i>Слушает событие 'chgDom' (от HabrAjax, например), чтобы выполниться в подгруженном блоке от другого скрипта.</i>
		</td>
		<td>
			<ul>
				<li><big><a href=https://greasyfork.org/ru/scripts/1966-habr-percentage-ring>Greasyfork</a></big></li>
				<li>Старое описание <a href=http://userscripts-mirror.org/scripts/show/129371>userscripts-mirror.org</a> <i>(не&nbsp;устанавли&shy;<br>вать оттуда)</i></li>
				<li>Статья <a href=http://habrahabr.ru/post/131818/>Диаграмма процентовки «за и против» на canvas</a></li>
			</ul>
		</td>
		<td>
			<i>(100 строк)</i>
			<ul>
				<li><a href=https://github.com/spmbt/haPages/tree/gh-pages/userscript/habrPercentageRing>Github</a><br>
				<li><a href=https://greasyfork.org/ru/scripts/1966-habr-percentage-ring/code>Greasyfork</a><br>
				Установить:</li>
				<li><a href=http://spmbt.github.io/haPages/userscript/habrPercentageRing/habrPercentageRing.user.js>Raw</a></li>
				<li><a href=https://greasyfork.org/scripts/1966-habr-percentage-ring/code/Habr%20Percentage%20Ring.user.js>Greasyfork</a></li>
			</ul>
		</td>
	</tr>


	<tr>
		<td align=center valign=top>Стили и скрипт <big><b><a href=http://habrahabr.ru/post/213615/>UfoCorrect</a></b></big><br>
			для сайтов:<br>
			<a href=http://habrahabr.ru>Habrahabr</a>,<br>
			<a href=http://habrastorage.org">habrastorage.org</a>,<br>
			<a href=http://freelansim.ru">freelansim.ru</a>,<br>
			<a href=http://toster.ru">toster.ru</a>,<br>
			<a href=http://tmtm.ru">tmtm.ru</a>,<br>
			<i>(Fx3+, Chr, Op10+)</i>
		</td>
		<td>Исправляет длинные тени у нескольких рисунков для приведения дизайна к единому реалистичному стилю.
		</td>
		<td>
			<ul>
				<li><a href=https://userstyles.org/styles/102581/>userstyles.org</a></li>
				<li>Статья <a href=http://habrahabr.ru/post/213615/>Избавление нашего мира от длинных теней</a></li>
			</ul>
		</td>
		<td>
			<ul>
				<li><a href=https://github.com/spmbt/haPages/tree/gh-pages/userscript/ufocorrect>Github</a><br>
				<li><a href=https://userstyles.org/styles/102581/>userstyles (CSS)</a></li>
				Установить:</li>
				<li><a href=http://spmbt.github.io/haPages/userscript/ufocorrect/ufocorrect.user.js>Raw js</a></li>
				<li><a href=https://greasyfork.org/ru/scripts/1962-ufocorrect>Greasyfork</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<td colspan=4>
<blockquote> Для загрузки скрипта в Хром как распакованного расширения полезно иметь <a href="http://spmbt.github.io/haPages/userscript/habrAjax/manifest.json">файл манифеста</a>. Для других скриптов - пишутся аналогичные или другим способом достигается <a href="http://habrahabr.ru/post/226063/">разрешение скриптов в Хроме</a>.</blockquote>
		</td>
	</tr>


	<tr>
		<td align=center valign=top><big><b><a href=https://greasyfork.org/ru/scripts/1964-habractivity>HabrActivity</a></b></big><br>
			для сайтов:<br>
			<a href=http://habrahabr.ru>Habrahabr</a>,<br>
			<a href=http://geektimes.ru">Geektimes.ru</a>,<br>
			<i>(Fx30+, Chr35+, Op12+)</i>
		</td>
		<td>Снятие со страниц комментариев данных об активности выбранного пользователя и представление их в виде диаграммы, подобной диаграмме активности "Contributions" на Github. <a href=http://spmbt.github.io/haPages/doc/habractivity03.jpg>Скриншот</a>.
		</td>
		<td>
			<ul>
				<li><a href=https://greasyfork.org/ru/scripts/1964-habractivity>greasyfork</a></li>
				<li>Старое (подробное) описание <a href=http://userscripts-mirror.org/scripts/show/162360>userscripts-mirror.org</a> <i>(не&nbsp;устанавли&shy;<br>вать оттуда)</li>
				<li>описание имеется и в коде самой программы, просматривается после установки по нажатию "Подробности".</li>
			</ul>
		</td>
		<td>
			<i>(400 строк)</i>
			<ul>
				<li><a href=https://github.com/spmbt/haPages/tree/gh-pages/userscript/habrActivity>Github</a><br>
				Установить:</li>
				<li><a href=https://github.com/spmbt/haPages/tree/gh-pages/userscript/habrActivity/habractivity.user.js>Raw</a></li>
				<li><a href=https://greasyfork.org/scripts/1964-habractivity/code/habrActivity.user.js>Greasyfork</a></li>
			</ul>
		</td>
	</tr>


	<tr>
		<td align=center valign=top><big><b><a href=https://greasyfork.org/ru/scripts/1965-habrakarmaview>HabraKarmaView</a></b></big><br>
			для сайтов:<br>
			<a href=http://habrahabr.ru>Habrahabr</a>,<br>
			<a href=http://geektimes.ru">Geektimes.ru</a>,<br>
			<i>(Fx30+, Chr35+, Op12+)</i>
		</td>
		<td>Подсказка кармы и рейтинга по наведению на любой ник на странице, кроссбраузерно.<br>
		<br>
		<i>По событию 'chgDom' поддерживается обработка подгруженных блоков в HabrAjax.</i>
		</td>
		<td>
			<ul>
				<li><a href=https://greasyfork.org/ru/scripts/1965-habrakarmaview>Greasyfork</a></li>
				<li>Старое описание <a href=http://userscripts-mirror.org/scripts/show/132273.html>userscripts-mirror.org</a> <i>(не&nbsp;устанавли&shy;<br>вать оттуда)</i></li>
			</ul>
		</td>
		<td>
			<i>(150 строк)</i>
			<ul>
				<li><a href=https://github.com/spmbt/haPages/tree/gh-pages/userscript/habraKarmaView>Github</a><br>
				Установить:</li>
				<li><a href=http://spmbt.github.io/haPages/userscript/habraKarmaView/habraKarmaView.user.js>Raw</a></li>
				<li><big><a href=https://greasyfork.org/scripts/1965-habrakarmaview/code/HabraKarmaView.user.js>Greasyfork</a></big></li>
			</ul>
		</td>
	</tr>


	<!--tr>
		<td align=center valign=top><a href=></a>
		</td>
		<td>
		</td>
		<td>
			<ul>
				<li><a href=></a></li>
				<li><a href=></a></li>
				<li><a href=></a></li>
			</ul>
		</td>
		<td>
			<ul>
				<li><a href=></a><br>
				Установить:</li>
				<li><a href=></a></li>
				<li><a href=></a></li>
			</ul>
		</td>
	</tr-->
	<tr>
		<td colspan=4>
<blockquote> Внимание, ссылки на установку со страниц описаний скриптов на userscripts-mirror.org - УСТАРЕВШИЕ и не могут быть там обновлены. Даны исключительно для документации и просмотра истории. устанавли&shy;<br>вать - с Github или greasyfork.org.</blockquote>
		</td>
	</tr>


	<tr>
		<td align=center valign=top><big><b><a href=https://greasyfork.org/ru/scripts/5915-feedly-partial-refresh-by-r-in-any-keyboard-layout>FeedlyCtrlF5</a></b></big><br>
			для сайта<br>
			<a href=http://feedly.com>feedly.com</a><br>
			<i>(Fx30+, Chr35+, Op12?)</i>
		</td>
		<td>Оформление висячих заголовков и обновление по клавише "R" в любом национальном регистре клавиатуры.
		</td>
		<td>
			<ul>
				<li><a href=https://greasyfork.org/ru/scripts/5915-feedly-partial-refresh-by-r-in-any-keyboard-layout>Greasyfork</a></li>
			</ul>
		</td>
		<td>
			<i>(100 строк)</i>
			<ul>
				<li><a href=https://github.com/spmbt/haPages/tree/gh-pages/userscript/feedlyCtrlF5>Github</a><br>
				Установить:</li>
				<li><a href=http://spmbt.github.io/haPages/userscript/feedlyCtrlF5/feedlyCtrlF5.user.js>Raw</a></li>
				<li><a href=https://greasyfork.org/scripts/5915-feedly-partial-refresh-by-r-in-any-keyboard-layout/code/Feedly:%20partial%20refresh%20by%20R%20in%20any%20keyboard%20layout.user.js>Greasyfork</a></li>
			</ul>
		</td>
	</tr>


	<tr>
		<td align=center valign=top>Стили и скрипт <big><b><a href=http://spmbt.github.io/haPages/doc/overCompact/>OverCompact</a></b></big><br>
			для сайта и форума<br>
			<a href=http://overclockers.ru>overclockers.ru</a><br>
			<i>(Fx15+, Chr20+, Op11+)</i>
		</td>
		<td>Модификация вида сайта и форума стилями. Примерно 10% работы делают скрипты - то, что не могут сделать стили.<br>
		<br>
		Основное назначение - стилизация, компактность списков форумов, нераспирание страниц сайта (ширина страниц становится допустимой от 600-800 пикс.)..
		</td>
		<td>
			<ul>
				<li><a href=http://spmbt.github.io/haPages/doc/overCompact/>Github-doc</a></li>
				<li><a href=https://userstyles.org/styles/43834/>Userstyles (CSS)</a></li>
				<li><a href=https://greasyfork.org/ru/scripts/1963-overcompact>Greasyfork (JS)</a> (включая стили)</li>
				<li><a href=http://forums.overclockers.ru/viewtopic.php?f=14&t=396030>overclockers.ru</a></li>
				<li>Старое описание скриптов на <a href=http://userscripts-mirror.org/scripts/show/96460.html>userscripts-mirror.org</a> <i>(не&nbsp;устанавли&shy;<br>вать оттуда)</li>
			</ul>
		</td>
		<td>
			<ul>
				<li><a href=https://github.com/spmbt/haPages/tree/gh-pages/userscript/overCompact>Github</a><br>
				Установить:</li>
				<li><a href=http://spmbt.github.io/haPages/userscript/overCompact/overCompact.user.css>Raw CSS</a></li>
				<li><a href=http://spmbt.github.io/haPages/userscript/overCompact/overCompact.user.js>Raw JS</a></li>
				<li><a href=https://userstyles.org/styles/43834/>Userstyles (CSS)</a></li>
				<li><a href=https://greasyfork.org/scripts/1963-overcompact/code/OverCompact.user.js>Greasyfork (JS)</a> (включая стили)</li>
			</ul>
		</td>
	</tr>
</table>


#### Другие скрипты и стили ####

* [googleSearchExtraButtons](https://github.com/spmbt/googleSearchExtraButtons): добавление нескольких кнопок на страницу результатов поиска Google (искать PDF; за последний день, неделю, месяц и год). <a href=http://habrahabr.ru/post/179367/>Статья</a> (2013) о причинах выставления этих кнопок.

---

Скрипты и их функции имеют страницы описаний. Пример страницы `haPages` для описания функций: [Перенос сообщений из "прямого эфира" в "Лучшие"](http://spmbt.github.io/haPages/doc/habrAjax/sidebarLive2Dailybest.htm).



