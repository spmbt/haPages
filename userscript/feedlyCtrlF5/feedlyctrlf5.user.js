// ==UserScript==
// @id          feedlyCtrlF5
// @name        Feedly: partial refresh by R in any keyboard layout
// @name:ru     Feedly: обновление списка по R в любом регистре
// @version     5.2014.10.22
// @description Refresh by "R" in any national keyboard layout, add styles, date of refresh and floating title of opened article
// @description:ru Обновляет по "R", исправляет стили, добавляет время обновления и висячий заголовок открытой статьи 
// @namespace   github.com/spmbt
// @include     http://feedly.com/*
// @update 4 show date+time of load page or refresh; floating author+title of opened line + float.date+time
// ==/UserScript==

//(en) In the site feedly.com there are many keyboard shortcuts, for example, "R" - is "Refresh" of part of page, renewing of list of records. Unfortunately, there is bug in any national keyboard layout. It catch keyboard letter, but not key code. Script fix it and add such partial refresh by Ctrl-F5 or Shift-F5.

//Userstyles added to script as bonus. Styles make table more compact and remove unneeded buttons such as Twitter etc. It may to disable userstyles by CSS_ON =0.

// Additions of 20, Oct 2014:
// * show date-time of page loading or partial refresh by "R").
// * author and title in floating block on top;
// * styles fixing

//(ru) На сайте  feedly.com есть много клавиатурных сокращений, в частности, R - это "Refresh" части страницы, а именно - обновление списка записей. К сожалению, есть недоработка: в иной национальной раскладке клавиша перестаёт действовать. Ловится клавиша не по ней самой, а по символу на ней. Расширение исправляет недоработку. И добавляет возможность частичного обновления по Ctrl-F5 или Shift-F5. конечно, не мешало бы добавить и исправление этого недостатка для других клавиш, если ими пользуются.

//Как бонус, добавляются стили, относящиеся к сайту, чтобы не добавлять их в юзер-стилях. Делают таблицу компактнее и убирают лишние кнопки (Твиттер и прочие). Отключить стили можно переменной CSS_ON в скрипте, установов в 0.

(function(userCss){
	var CSS_ON =1; //user CSS enable

var win = typeof unsafeWindow !='undefined'? unsafeWindow : (function(){return this})()
	,wcl = win.console.log
	,$q = function(q, el){return (el||document).querySelector(q)}
	,ff
	,Tout = function(h){
		(function(){
			if((h.dat = h.check(h.t) )) //wait of positive result, then occcurense
				h.occur();
			else if(h.i-- >0) //next slower step
				win.setTimeout(arguments.callee, (h.t *= h.m) );
		})();
	}, tOuttime;
new Tout({t:320, i:7, m: 1.6
	,check: function(){
		return document && $q('#pageActionRefresh');
	}
	,occur: function(){
		document.addEventListener('keydown',ff = function(ev){
			var refroButt = $q('#pageActionRefresh')
				,key = ev.keyCode || ev.which;
			//wcl(4, ev.keyCode, ev.which, ev.type)
			if(key ==82 || key ==116 && (ev.ctrlKey || ev.shiftKey) ){
				refroButt.click();
				win.setTimeout(function(){new Tout(tOuttime)}, 900);
				ev.preventDefault(); ev.stopPropagation();}
		},!1);
		new Tout(tOuttime = {t:520, i:6, m: 1.6
			,check: function(){
				return $q('#section0 .label >div');
			},occur: function($){
				var NOW = new Date(), NOWmins = NOW.getMinutes()
					,now = NOW.getFullYear() +'-'+ (NOW.getMonth() +1) +'-'+ NOW.getDate() +', '+ NOW.getHours() +':'+ (NOWmins>9?'':0) + NOWmins;
				(!$ && this.dat || $).innerHTML = now;
				$timeFloat && ($timeFloat.innerHTML = now);
			}
		});
		document.addEventListener('keyup',ff);
		var $flBar = $q('#floatingBar');
		if($flBar){
			var $lineTitleFloat = document.createElement('div')
				,$timeFloat = document.createElement('div');
			$lineTitleFloat.className ='lineTitleFloat';
			$flBar.appendChild($lineTitleFloat);
			$lineTitleFloat.innerHTML ='<span class=author title=""></span> <b class=title></b>';
			$timeFloat.className ='timeFloat';
			$flBar.insertBefore($timeFloat, $flBar.firstChild);
		}
		setInterval(function(){
			var $inFrm = $q('.inlineFrame');
			if(!$lineTitleFloat) return;
			if($inFrm){
				var author = $q('.metadata .sourceTitle', $inFrm)
					,title = $q('.entryHeader .entryTitle', $inFrm);
			}
			var $timeHead = $q('#section0 .label >div');
			if($timeFloat && $timeHead && $timeHead.innerHTML =='')
				tOuttime.occur($timeHead);
			$q('.author', $lineTitleFloat).innerHTML = author && author.innerHTML ||'';
			$q('.author', $lineTitleFloat).title = author && author.innerHTML ||'';
			$q('.title', $lineTitleFloat).innerHTML = title && title.innerHTML ||'';
		}, 999);
	}
});
(function(css){ //addRules
	if(typeof GM_addStyle !='undefined') GM_addStyle(css); //Fx,Chr
	else if(typeof addStyle !='undefined') addStyle(css);
	else{ //Op
		var heads = document.getElementsByTagName('head');
		if(heads.length){
			var node = document.createElement('style');
			node.type ='text/css';
			node.appendChild(document.createTextNode(css));
			heads[0].appendChild(node);
	}}
})('#floatingBar,.floatingBar{padding-top:0!important; background: #f8f8f8}'
  +'.pageActionBar{height: 18px!important}'
  +'#floatingBar .pageactionbar{margin-right: 145px}'
  +'#section0 .label >div{height: 1.3em!important; text-align: right; font-size: 11px; font-style: italic; color: #a3a3a2}'
  +'.lineTitleFloat{height: 15px; line-height: 15px; margin: -15px -30px 0; padding-left: 3px; overflow: hidden; border-bottom: 2px solid #f8f8f8; background: #eee}'
  +'.lineTitleFloat .author{display: inline-block; float: left; width: 127px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;}'
  +'.timeFloat{float: right; line-height: 18px; margin: 0 -28px 0 -18px; font-size: 11px; font-style: italic; color: #a3a3a2}'
  + (CSS_ON? userCss :'') );

})(
' #feedlyTabsHolder{width: 240px!important}'
  +'#feedlyTabs{padding: 0 2px 0 0!important}'
  +'#feedlyFrame{margin-left: 220px!important}'
  +'#mainBar, #feedlyPage{width:auto!important}'
  +'a[style*="images/condensed-twitter-black"], a[style*="images/condensed-sharing-facebook"]{display:none!important}'
  +'#feedlyMessageBar{display:none!important}'
  +'.profileMore{margin-right:38px!important}'
  +'#feedlyTitleBar{margin-left: 11px!important}'
    +'#feedlyPart0{padding-left: 6px!important}'
  +'#feedlyPart{padding-right: 6px!important}'
  +'.u0Entry .condensedTools{width: auto!important}'
  +'.u0Entry .condensedTools img {padding:0!important}'
  +'.u0Entry .condensedTools a:first-child{margin: 0 -5px 0 6px}'
  +'.u0Entry .lastModified{padding-left: 2px!important}'
  +'.u0EntryList{margin-top: 0!important}'
);
