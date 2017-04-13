/* просмотр картинок */
var win = window
	,doc = win.document
	, settings = {addImgs:{val:1}, viewX2:{val:1}, viewImgs:{val:1}, viewImgCenter:{val:1},noConsole:0 }
	,extd = function(elem, h, on){
		if(h)
			for(var i in h)
				elem[i] = h[i];
		if(on)
			for(var i in on)
				elem[i].addEventListener(i, on[i],!1);
		return elem;
	},
	wcl = function(a){ //консоль как метод строки или функция, с отключением по settings.noConsole.val ==1
		if(!a) a='';
		if(win.console && (!window.settings || window.settings && !window.settings.noConsole.val))
			win.console.log.apply(console, this instanceof String
				? ["'=="+this.toString()+"'"].concat([].slice.call(arguments))
				: arguments
			)
	}
	,isFx = /Firefox/.test(navigator.userAgent)
	,$pd = function(ev){ev.preventDefault();}
	,$dispTogl = function(el){el.style.display = el.style.display ==='none'?'':'none'; return el;}
	,$offset = function(el){
		var box = el.getBoundingClientRect(), aa ={
			top: Math.round(box.top + win.pageYOffset),
			left: Math.round(box.left + win.pageXOffset) };
		return aa;
	},
	$each = Function.prototype.call.bind(Array.prototype.forEach),
	extS =['jpg','jpeg','gif','png'],
	getSel = function(selS, selPart){
		if(typeof selS =='string') selS =[selS];
		for(var i =0, sL = selS.length, s =''; i < sL; i++)
			for(var j =0, eL = extS.length; j < eL; j++)
				s += (i==0 && j==0 ?'':',') + selS[i] + selPart + extS[j] +'"]'; //.content a[href $=".jpg"]
		return s;
	},
	getSel2 = function(selS, selPart){
		if(typeof selS =='string') selS =[selS];
		for(var i =0, sL = selS.length, s =''; i < sL; i++)
			s += (i==0 ?'':',') + selS[i] + selPart;
		return s;
	}
,$e= function(g){ //создать или использовать имеющийся элемент	//h={type|elem,clss,clssAdd,html,css|css=abs,attr,on,revent,appendTo,prependTo,before,after}
	if(typeof g =='object' && arguments.length==1 && (g.html !==undefined || g.attr !==undefined)){
		var attr = g.attr ||{}; attr.innerHTML = g.html ||'';
	}
	var stylAbs = typeof g.type =='string' && /^abs$/i.test(g.type); //TODO если не строка?
	if(!g.type && !g.elem || /^abs$/i.test(g.type) ) //создать DIV по условию отсутствия
		g.type ='DIV';
	var newEl = typeof g.type =='string'; //признак нового для постановки в DOM
	var o = newEl ? document.createElement(g.type) : (g.type && g.type.attributes ? g.type : g.elem);
	if(g.clss)
		o.className = g.clss;
	if(g.clssAdd)
		o.classList.add(g.clssAdd);
	if(g.css=='abs')
		o.style.position ='absolute';
	else if(g.css)
		extd(o.style, g.css);
	if(stylAbs)
		extd(o.style,{position:'absolute'});
	if(attr)
		for(var i in attr){
			if(i=='innerHTML')
				o[i] = attr[i];
			else
				o.setAttribute(i, attr[i]);
		}
	if(g.on)
		for(var i in g.on)
			o.addEventListener(i, g.on[i],!1);
	if(g.revent)
		for(var i in g.revent)
			o.removeEventListener(i, g.revent[i],!1);
	if(1||newEl){
		g.appendTo && g.appendTo.appendChild(o); //ставится по ориентации, если новый
		g.prependTo && (g.prependTo.firstChild
			? g.prependTo.insertBefore(o, g.prependTo.firstChild)
			: g.prependTo.appendChild(o) );
		g.before && g.before.parentNode.insertBefore(o, g.before);
		g.after && (g.after.nextSibling
			? g.after.parentNode.insertBefore(o, g.after.nextSibling)
			: g.after.parentNode.appendChild(o) ); }
	return o;
	//след.шаг: обрабатывать массивы как деревья DOM
}
,addFullImg = function(a, sz, x2, isExp){ //построение изображения по клику на ссылке
	x2 = x2 || 1;
	var newW =''
		,newH =''
		,fullW = x2* sz[0]
		,fullH = x2* sz[1]
		,scrW = doc.documentElement.clientWidth -10
		,scrH = win.innerHeight -3
		,isA = a.tagName =='A'
		,full = isA ? dQ('.de-img-full', a) : a.nextSibling
		,hS = settings;
	if(full && /de-img-full/.test(full.className) && isExp || !full && isExp === false)
		return;
	if(hS.viewImgs.val && !hS.viewImgCenter.val && !dQ('img[style*="fixed"]', a) )
		$dispTogl(dQ('img', a));
	if(full && /de-img-full/.test(full.className)){
		if(full.moved)
			full.moved = false;
		else{
			$dispTogl(full);
			setTimeout(function(){full.parentNode.removeChild(full);},1);
		}
		return;
	}
	if(hS.viewImgs.val && !hS.viewImgCenter.val)
		scrW -= $offset(a).left + 25;
	else{
		var el = dQ('.de-img-center', doc);
		el && el.parentNode.removeChild(el);
	}
	if(fullW && fullH){
		newW = Math.min(fullW, scrW);
		newH = newW * fullH / fullW;
		if(hS.viewImgCenter.val && newH > scrH){
			newH = scrH;
			newW = newH * fullW / fullH;
		}
		if(newW/fullW < 1.13 && newW / fullW >0.88){
			newW = +fullW;
			newH = +fullH;
			var title = x2 +'00%';
		}
	}
	if(!title)
		title = Math.round(newW / fullW *100)* x2 +'%';
	var isViewUrl = !hS.addImgs.val && a.getAttribute('data-viewUrl')
		,url = isA ? a.href : isViewUrl || a.previousSibling.firstChild.src;
	if(isViewUrl)
		title ='100%';
	a.insertAdjacentHTML(isA ?'beforeend':'afterend' //Fx8+
		,'<img class="de-img-full" src="'+ url +'" alt="'+ 
		url +'" width="'+(isViewUrl ?'': Math.floor(newW))+'" height="'+(isViewUrl ?'': Math.floor(newH)) +'" title="'+ title +'">');
	if(hS.viewImgCenter.val){
		var resizeImg = function(ev){ //обработчик колеса мыши - масштаб картинки
			var curX = ev.clientX
				,curY = ev.clientY
				,oldL = parseInt(this.style.left, 10)
				,oldT = parseInt(this.style.top, 10)
				,oldW = parseFloat(this.style.width || this.width)
				,oldH = parseFloat(this.style.height || this.height)
				,d = isFx ? -ev.detail : ev.wheelDelta
				,newW = oldW * (d >0 ? 1.25 : 0.8)
				,newH = oldH * (d >0 ? 1.25 : 0.8)
				,sizes = full.getAttribute('data-sizes').split('x');
			if(newW/sizes[0] < 1.13 && newW / sizes[0] >0.88){
				newW = +sizes[0];
				newH = +sizes[1];
				this.title = x2 +'00%';
			}else
				this.title = Math.round(newW / fullW *100)* x2 +'%';
			$pd(ev);
			this.style.width = newW +'px';
			this.style.height = newH +'px';
			this.style.left = parseInt(curX - (newW/oldW) * (curX - oldL), 10) +'px';
			this.style.top = parseInt(curY - (newH/oldH) * (curY - oldT), 10) +'px';
		};
		full = $e({elem: isA ? a.lastChild : a.nextSibling
			,clssAdd:'de-img-center'
			,css: {left: (scrW - newW)/2 +'px', top: (scrH - newH)/2 +'px'}
			,attr: {'data-sizes': fullW +'x'+ fullH}
			,on: isFx ? {DOMMouseScroll: resizeImg}:{mousewheel: resizeImg}
		});
		!isA && full.addEventListener('click',function(ev){
			if(full.moved){
                if(full.parentNode && full.parentNode.tagName == 'A' && !RegExp('\\.' + extS.join('|')).test(full.parentNode.href))
                    $pd(ev);
                full.moved = false;
            }else{
				$dispTogl(full);
				setTimeout(function(){full.parentNode && full.parentNode.removeChild(full);},1);
			}
		},!1);
		(function(el){ //makeMoveable --перетаскивание
			var elMove = function(ev){
					var dx,dy;
					el.style.left = (dx = ev.clientX - el.curX) +'px';
					el.style.top = (dy = ev.clientY - el.curY) +'px';
					el.moved = dx + dy > 6 && ev.clientX - el.startX + ev.clientY - el.startY > 6;
				},
				elStop = function(ev){
					var t = ev.target;
					$e({elem: doc.body
						,revent:{mousemove: elMove, mouseup: elStop}});
					if(ev.ctrlKey && t.parentNode.tagName=='A')
						t.parentNode.click(); //нативный клик вынесен под Ctrl+
                    el.moved = (Math.abs(ev.clientX - el.startX) + Math.abs(ev.clientY - el.startY) ||0) > 6;
                    if(!el.moved && ev.which ==1){
						$dispTogl(t);
						setTimeout(function(){t.parentNode.removeChild(t);},1);
					}
				};
			el.onmousedown = function(ev){
				$pd(ev);
				el.curX = (el.startX = ev.clientX) - parseInt(el.style.left, 10);
				el.curY = (el.startY = ev.clientY) - parseInt(el.style.top, 10);
				$e({elem: doc.body
					,on:{mousemove: elMove, mouseup: elStop}});
			};
		})(full);
	}
},
handlImgViews = function(el, selector){ //обработчики просмотров картинок
	var hS = settings
		,selector1 = getSel(selector,' a[href $="') || getSel(['.content','.message','.comments .text'],' a[href $="')
		,els = dQA(selector1, el); //все ссылки на картинки
	for(var i =0, linkImg; linkImg = els[i++];){ //подгрузка картинок в рамках до 200 на 200 по расширениям файлов в ссылках
		var a = linkImg.cloneNode(false)
			,imgsInLink = dQA('img', linkImg);
		if(imgsInLink && imgsInLink.length !=1 && hS.addImgs.val) //подгружать картинки-ссылки
			$e({type:'img' //малая картинка со ссылкой перед найденной ссылкой
				,clss:'de-img-pre'
				,attr:{src: a.href, alt: a.href}
				,on:{load: function(){
					var t = this
						,fullW = t.width
						,fullH = t.height
						,x2 = hS.viewX2.val && fullW *2 < win.innerHeight -3 ? 2:1; //признак "x2" - удваивать масштаб
					t.title = (x2 ==2 ?'/':'')+ fullW +'x'+ fullH;
					t.style.cursor = x2 ?'ne-resize':'move';
					if(t.parentNode.className =='imgL'|| t.parentNode.className =='lnk'){ //включить видимость копий, выключить - оригиналы ссылок
						t.parentNode.style.display ='inline-block';
						t.parentNode.nextSibling.style.display ='none';
						t.parentNode.title = t.title;
						if(t.parentNode.className =='lnk')
							t.parentNode.className ='lnk imgL';
					}else
						$dispTogl(t.parentNode);
					if(fullW <= 200 && fullH <= 200)
						return;
					var k = fullW/fullH;
					t.width = k < 1 ? 200 * k : 200;
					t.height = k < 1 ? 200 : 200/k;
				}},
				appendTo: $e({elem: $dispTogl(a)
					,attr:{target:'_blank'}
					,on:{click: function(ev){ //eventLinkImg(a);
						//'ev.button !==1'.wcl(ev.button,ev.button !==1, (hS.viewImgs.val || hS.viewImgCenter.val) && ev.button !==1)
						if((hS.viewImgs.val || hS.viewImgCenter.val) && ev.button !==1){
							if(ev.ctrlKey)
								return;
							$pd(ev);
							if(showImgMenu(ev, ev.currentTarget.frstChild) ) //по Shift+клик
								return;
							var titl = this.firstChild.title
								,imgWH = titl.match(/(\d+)x(\d+)$/)
								,x2 = titl.charAt(0)=='/'? 2:1; //признак "x2"
							if(imgWH && imgWH.length ==3)
								addFullImg(this, imgWH.slice(1), x2);
						}
					}}
					,before: linkImg
				})
			});
		else //подготовка тамбнейла для просмотра по клику на нём ссылки
			imgsInLink && imgsInLink.length ==1 && $e({elem: imgsInLink[0]
				,clssAdd:'de-img-thumb'
				,attr:{'data-viewUrl': linkImg.href} });
	}
	if(!hS.viewImgs.val && !hS.viewImgsCenter.val) //не просматривать картинки в странице
		return;
	for(var img, i =0, imgs = dQA(getSel2(selector,' img:not(._noAddOwnView)'), el); img = imgs[i++];){
		//'12'.wcl(img,img.width , img.height)
		if( (img.width >22 || img.height >22 || img.width==0 || img.height==0) && (!img.previousSibling || img.previousSibling && img.previousSibling.className !='de-img-hid') )
		(function(img){$e({type:'img' //полная картинка в невидимом диве с overflow
			,clss:'_noAddOwnView'
			,attr:{src: hS.addImgs.val && img.getAttribute('data-viewUrl') || img.src}
			,css:{position:'absolute', left:'-9999px'}
			,on:{load: function(ev){
				var fullW = this.width
					,fullH = this.height;
				this.title = fullW +'x'+ fullH;
				$dispTogl(this.parentNode);
				//'WHBig'.wcl(fullW, img.width, fullH, img.height, img);
				if(fullW == img.width && fullH == img.height){
					img.style.cursor ='ne-resize';
					if(hS.viewX2.val)
						this.title = '/'+ this.title; //признак "x2" (особый курсор)
				}else if(!hS.viewX2.val){
					img.style.cursor ='move';
					img.setAttribute('data-view',1);
				}
			}},
			appendTo: img.previousSibling && img.previousSibling.className =='de-img-hid' && img.previousSibling || $e({clss:'de-img-hid'
				,css:{overflow:'hidden', width:0, height:'8px'}
				,before: img
			})
		}) })($e({elem: img //обработчик и смена курсора картинки
			,css: hS.viewX2.val ?{cursor:'move'}:{}
			,on:{click: function(ev){ //eventLinkImg(a);
				//'ev.button !==1'.wcl(ev.button,ev.button !==1, (hS.viewImgs.val || hS.viewImgCenter.val) && ev.button !==1)
				var t = ev.currentTarget;
				if(!hS.viewX2.val && !t.getAttribute('data-view') )
					return; //не просматривать, если размер не изменится
				if((hS.viewImgs.val || hS.viewImgCenter.val) && ev.button !==1){
					if(ev.ctrlKey)
						return;
					$pd(ev);
					if(showImgMenu(ev, t)) //по Shift+клик
						return;
					var titl = this.previousSibling.firstChild.title
						,imgWH = titl.match(/(\d+)x(\d+)$/)
						,x2 = titl.charAt(0)=='/'? 2:1; //признак "x2"
					if(imgWH && imgWH.length ==3)
						addFullImg(this, imgWH.slice(1), x2);
				}
			}}
		}));
	}
},
showImgMenu = function(ev, img){ //контекстное меню на картинке - поиск по изображению
	//'img'.wcl(ev, ev.pageX, ev.pageY)
	if(!ev.shiftKey) return;
	else{
		var srcD ={TinEye:{url:'tineye.com/search/?url='}
				,Google:{url:'google.com/searchbyimage?image_url='}
				,Yandex: {url:'images.yandex.ru/yandsearch?text=&rpt=imagedups&img_url='}
				,SauceNAO:{url:'saucenao.com/search.php?url='}
				,IQDB:{url:'iqdb.org/?url='} }
			,srcMenu = $e({clss:'de-menu'
				,on:{mouseout: function(){
					$dispTogl(srcMenu);
					setTimeout(function(){srcMenu.parentNode.removeChild(srcMenu);},1); }}
				,css:{left: ev.pageX -30 +'px', top: ev.pageY -24 +'px'}
				,appendTo: doc.body
			});
		for(var i in srcD)
			$e({type:'A'
				,clss:'de-src'
				,attr:{target:'_blank', href:'http://'+ srcD[i].url + img.src}
				,html:'<img src="http://'+ srcD[i].url.replace(/\/.*/,'') +'/favicon.ico"> '+ i
				,on:{mouseout: function(ev){ ev.stopPropagation();}}
				,appendTo: srcMenu
			});
	}
	return 1;
},
dQ = function(q, f){return (f||document).querySelector(q);} // контекстный DOM-селектор
,dQA = function(q, f){return (f||document).querySelectorAll(q);}

String.prototype.wcl = wcl;
iC = function(){
	handlImgViews(document.documentElement,'.wraprre .b-h3Block');
};

if(window.addEventListener)
	this.addEventListener('DOMContentLoaded',iC,!1);
else
	this.attachEvent('onload',iC);
