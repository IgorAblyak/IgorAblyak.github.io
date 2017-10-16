window.addEventListener("load", function(){
	var getNavi = document.querySelector(".navigation-list");

	var mobile = document.createElement("span");
	mobile.classList.add("mobile-navigation");
	getNavi.parentNode.insertBefore(mobile,getNavi);

	document.querySelector(".mobile-navigation").addEventListener("click", function(){
		var a = getNavi.getAttribute('style');
		if(a){
			getNavi.removeAttribute('style');
			document.querySelector(".mobile-navigation").style.backgroundImage='url(images/mobile-menu.png)';
		} else {
			getNavi.style.display='block';
			document.querySelector(".mobile-navigation").style.backgroundImage='url(images/mobile-close.png)';
		}
	});
	var getElm = getNavi.querySelector("LI");
	for(var i=0;i<getElm.length;i++){
		if(getElm[i].children.length>1){
			var smenu = document.createElement("span");
			smenu.setAttribute("class","mobile-submenu");
			smenu.setAttribute("OnClick","submenu("+i+")");
			getElm[i].appendChild(smenu);
		};
	};
	submenu = function (i){
		var sub = getElm[i].children[1];
		var b = sub.getAttribute('style');
		if(b){
			sub.removeAttribute('style');
			getElm[i].lastChild.style.backgroundImage='url(images/mobile-expand.png)';
			getElm[i].lastChild.style.backgroundColor='rgba(11, 163, 156, 0.7)';
		} else {
			sub.style.display='block';
			getElm[i].lastChild.style.backgroundImage='url(images/mobile-collapse.png)';
			getElm[i].lastChild.style.backgroundColor='rgba(0,0,0,0.8)';
		}
	};
});
