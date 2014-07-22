// ==UserScript==
// @id          feedlyCtrlF5
// @name        feedlyCtrlF5
// @version     1.2014.5.19
// @description Add refresh by Ctrl-F5, Shift-F5 and "R" in any national keyboard layout
// @namespace   https://github.com/spmbt/
// @include     http://feedly.com/*
// ==/UserScript==

//(en) In the site feedly.com there are many keyboard shortcuts, for example, "R" - is "Refresh" of part of page, renewing of list of records. Unfortunately, there is bug in any national keyboard layout. It catch keyboard letter, but not key code. Script fix it and add such partial refresh by Ctrl-F5 or Shift-F5.

//Userstyles added to script as bonus. Styles make table more compact and remove unneeded buttons such as Twitter etc. It may to disable userstyles by CSS_ON =0.

//(ru) На сайте  feedly.com есть много клавиатурных сокращений, в частности, R - это "Refresh" части страницы, а именно - обновление списка записей. К сожалению, есть недоработка: в иной национальной раскладке клавиша перестаёт действовать. Ловится клавиша не по ней самой, а по символу на ней. Расширение исправляет недоработку. И добавляет возможность частичного обновления по Ctrl-F5 или Shift-F5. конечно, не мешало бы добавить и исправление этого недостатка для других клавиш, если ими пользуются.

//Как бонус, добавляются стили, относящиеся к сайту, чтобы не добавлять их в юзер-стилях. Делают таблицу компактнее и убирают лишние кнопки (Твиттер и прочие). Отключить стили можно переменной CSS_ON в скрипте, установов в 0.

(function(css){
	var CSS_ON =1; //user CSS enable

var win = typeof unsafeWindow !='undefined'? unsafeWindow : window
	,wcl = win.console.log
	,$q = function(q, el){return (document||el).querySelector(q)}
	,ff
	,Tout = function(h){
		var th = this;
		(function(){
			if((h.dat = h.check(h.t) )) //wait of positive result, then occcurense
				h.occur();
			else if(h.i-- >0) //next slower step
				th.ww = window.setTimeout(arguments.callee, (h.t *= h.m) );
		})();
	};
new Tout({t:320, i:6, m: 1.6
	,check: function(t){
		return document && $q('#pageActionRefresh');
	}
	,occur: function(){
		document.addEventListener('keydown',ff = function(ev){
			var refroButt = $q('#pageActionRefresh')
				,key = ev.keyCode || ev.which;
			//wcl(4, ev.keyCode, ev.which, ev.type)
			if(key ==82 || key ==116 && (ev.ctrlKey || ev.shiftKey) ){
				refroButt.click();
				ev.preventDefault(); ev.stopPropagation();}
		},!1);
		document.addEventListener('keyup',ff);
	}
});

if(CSS_ON)
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
	})(css);

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
  +'.inlineFrame .u100entry .title{font-size:17px!important}'
